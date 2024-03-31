"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InGameState_1 = require("./controller/InGameState");
module.exports = async (ctx) => {
    const namespace = ctx.plugin.module.getName();
    const configRes = await ctx.LPTE.request({
        meta: {
            type: 'request',
            namespace: 'plugin-config',
            version: 1
        }
    });
    if (configRes === undefined) {
        ctx.log.warn('config could not be loaded');
    }
    let config = Object.assign({
        items: [],
        level: [],
        events: [],
        killfeed: false,
        ppTimer: false,
        showNicknames: false,
        showTournament: true,
        delay: 0,
        scoreboard: {
            active: true,
            barons: true,
            heralds: true,
            score: true,
            standings: true,
            tags: true,
            tower: true
        }
    }, configRes === null || configRes === void 0 ? void 0 : configRes.config);
    ctx.LPTE.on(namespace, 'set-settings', (e) => {
        config.items = e.items;
        config.level = e.level;
        config.events = e.events;
        config.killfeed = e.killfeed;
        config.ppTimer = e.ppTimer;
        config.delay = e.delay;
        config.showNicknames = e.showNicknames;
        config.showTournament = e.showTournament;
        config.scoreboard = e.scoreboard;
        ctx.LPTE.emit({
            meta: {
                type: 'set',
                namespace: 'plugin-config',
                version: 1
            },
            config
        });
    });
    ctx.LPTE.on(namespace, 'get-settings', (e) => {
        ctx.LPTE.emit({
            meta: {
                type: e.meta.reply,
                namespace: 'reply',
                version: 1
            },
            ...config
        });
    });
    ctx.LPTE.emit({
        meta: {
            type: 'add-pages',
            namespace: 'ui',
            version: 1
        },
        pages: [
            {
                name: 'LoL: In-Game',
                frontend: 'frontend',
                id: `op-${namespace}`
            }
        ]
    });
    let inGameState;
    ctx.LPTE.on('module-league-static', 'static-loaded', async (e) => {
        const statics = e.constants;
        const stateRes = await ctx.LPTE.request({
            meta: {
                type: 'request',
                namespace: 'module-league-state',
                version: 1
            }
        });
        const state = stateRes === null || stateRes === void 0 ? void 0 : stateRes.state;
        ctx.LPTE.on('lcu', 'lcu-champ-select-create', () => {
            inGameState = new InGameState_1.InGameState(namespace, ctx, config, state, statics);
        });
        ctx.LPTE.on(namespace, 'reset-game', () => {
            ctx.log.info('Resetting in game data');
            inGameState = new InGameState_1.InGameState(namespace, ctx, config, state, statics);
        });
        ctx.LPTE.on(namespace, 'allgamedata', (e) => {
            if (inGameState === undefined) {
                inGameState = new InGameState_1.InGameState(namespace, ctx, config, state, statics);
            }
            const data = e.data;
            inGameState.handelData(data);
        });
        ctx.LPTE.on(namespace, 'farsight-data', (e) => {
            if (inGameState === undefined) {
                inGameState = new InGameState_1.InGameState(namespace, ctx, config, state, statics);
            }
            const data = e.data;
            inGameState.handelFarsightData(data);
        });
        ctx.LPTE.on(namespace, 'live-events', (e) => {
            if (inGameState === undefined) {
                inGameState = new InGameState_1.InGameState(namespace, ctx, config, state, statics);
            }
            e.data.forEach((event) => {
                inGameState.handelEvent(event);
            });
        });
        ctx.LPTE.on('module-league-replay', 'set-playback', (e) => {
            if (inGameState === undefined) {
                inGameState = new InGameState_1.InGameState(namespace, ctx, config, state, statics);
            }
            const data = e.data;
            inGameState.handelReplayData(data);
        });
        ctx.LPTE.on(namespace, 'request', (e) => {
            if (inGameState === undefined) {
                inGameState = new InGameState_1.InGameState(namespace, ctx, config, state, statics);
            }
            ctx.LPTE.emit({
                meta: {
                    type: e.meta.reply,
                    namespace: 'reply',
                    version: 1
                },
                state: inGameState.gameState
            });
        });
    });
    ctx.LPTE.on(namespace, 'show-inhibs', (e) => {
        if (inGameState === undefined)
            return;
        const side = parseInt(e.side);
        inGameState.gameState.showInhibitors = side;
    });
    ctx.LPTE.on(namespace, 'show-leader-board', (e) => {
        if (inGameState === undefined)
            return;
        const leaderboard = e.leaderboard;
        inGameState.gameState.showLeaderBoard = leaderboard;
    });
    ctx.LPTE.on(namespace, 'show-platings', (e) => {
        if (inGameState === undefined)
            return;
        inGameState.gameState.platings.showPlatings = true;
    });
    ctx.LPTE.on(namespace, 'hide-inhibs', (e) => {
        if (inGameState === undefined)
            return;
        inGameState.gameState.showInhibitors = null;
    });
    ctx.LPTE.on(namespace, 'hide-platings', (e) => {
        if (inGameState === undefined)
            return;
        inGameState.gameState.platings.showPlatings = false;
    });
    ctx.LPTE.on(namespace, 'hide-leader-board', (e) => {
        if (inGameState === undefined)
            return;
        inGameState.gameState.showLeaderBoard = false;
    });
    // Emit event that we're ready to operate
    ctx.LPTE.emit({
        meta: {
            type: 'plugin-status-change',
            namespace: 'lpt',
            version: 1
        },
        status: 'RUNNING'
    });
};
//# sourceMappingURL=plugin.js.map