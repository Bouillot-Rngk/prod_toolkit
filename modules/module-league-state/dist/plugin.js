"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leagueStatic = void 0;
const RequestController_1 = require("./controller/RequestController");
const SetGameController_1 = require("./controller/SetGameController");
const UnsetGameController_1 = require("./controller/UnsetGameController");
const LCUDataReaderController_1 = require("./controller/LCUDataReaderController");
const LeagueState_1 = require("./LeagueState");
module.exports = async (ctx) => {
    const namespace = ctx.plugin.module.getName();
    // Register new UI page
    ctx.LPTE.emit({
        meta: {
            type: 'add-pages',
            namespace: 'ui',
            version: 1
        },
        pages: [
            {
                name: 'LoL: Game State',
                frontend: 'frontend',
                id: `op-${namespace}`
            }
        ]
    });
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
        recordChampselect: true
    }, configRes === null || configRes === void 0 ? void 0 : configRes.config);
    const requestController = new RequestController_1.RequestController(ctx);
    const setGameController = new SetGameController_1.SetGameController(ctx);
    const unsetGameController = new UnsetGameController_1.UnsetGameController(ctx);
    let lcuDataReaderController;
    // Answer requests to get state
    ctx.LPTE.on(namespace, 'request', (e) => {
        requestController.handle(e);
    });
    // Set and unset game
    ctx.LPTE.on(namespace, 'set-game', async (e) => {
        try {
            setGameController.handle(e);
        }
        catch (e) {
            ctx.log.error('Exception ocurred while handling set-game action: ', e);
        }
    });
    ctx.LPTE.on(namespace, 'unset-game', (e) => {
        unsetGameController.handle(e);
    });
    ctx.LPTE.on(namespace, 'save-live-game-stats', (e) => {
        LeagueState_1.state.live = e.gameState;
        LeagueState_1.state.live._available = true;
        LeagueState_1.state.live._created = new Date();
        LeagueState_1.state.live._updated = new Date();
    });
    ctx.LPTE.on(namespace, 'record-champselect', (e) => {
        config.recordChampselect = e.recordingEnabled;
        ctx.LPTE.emit({
            meta: {
                type: 'set',
                namespace: 'plugin-config',
                version: 1
            },
            config: {
                recordChampselect: e.recordingEnabled
            }
        });
        lcuDataReaderController.recordChampselect = e.recordingEnabled;
    });
    ctx.LPTE.on(namespace, 'reload-recording', (e) => {
        lcuDataReaderController.recording = e.data;
    });
    ctx.LPTE.on(namespace, 'request-recording', (e) => {
        ctx.LPTE.emit({
            meta: {
                type: e.meta.reply,
                namespace: 'reply',
                version: 1
            },
            data: lcuDataReaderController.recording
        });
    });
    ctx.LPTE.on(namespace, 'replay-champselect', (e) => {
        if (e.play && !lcuDataReaderController.replayIsPlaying) {
            lcuDataReaderController.replayChampselect();
        }
        else {
            lcuDataReaderController.stopReplay();
        }
    });
    ctx.LPTE.on(namespace, 'request-recoding-state', (e) => {
        ctx.LPTE.emit({
            meta: {
                type: e.meta.reply,
                namespace: 'reply',
                version: 1
            },
            recordingEnabled: lcuDataReaderController.recordChampselect,
            isPlaying: lcuDataReaderController.replayIsPlaying
        });
    });
    // Listen to external events
    // LCU
    ctx.LPTE.on('lcu', 'lcu-lobby-create', (e) => {
        lcuDataReaderController.handle(e);
    });
    ctx.LPTE.on('lcu', 'lcu-lobby-update', (e) => {
        lcuDataReaderController.handle(e);
    });
    ctx.LPTE.on('lcu', 'lcu-lobby-delete', (e) => {
        lcuDataReaderController.handle(e);
    });
    ctx.LPTE.on('lcu', 'lcu-champ-select-create', (e) => {
        lcuDataReaderController.handle(e);
    });
    ctx.LPTE.on('lcu', 'lcu-champ-select-update', (e) => {
        lcuDataReaderController.handle(e);
    });
    ctx.LPTE.on('lcu', 'lcu-champ-select-delete', (e) => {
        lcuDataReaderController.handle(e);
    });
    ctx.LPTE.on('lcu', 'lcu-end-of-game-create', (e) => {
        lcuDataReaderController.handle(e);
    });
    ctx.LPTE.on('lcu', 'lcu-end-of-game-update', (e) => {
        lcuDataReaderController.handle(e);
    });
    ctx.LPTE.on('lcu', 'lcu-end-of-game-delete', (e) => {
        lcuDataReaderController.handle(e);
    });
    ctx.LPTE.on(namespace, 'change-player-nick', (e) => {
        const index = LeagueState_1.state.lcu.lobby.members.findIndex((p) => p.summonerName === e.summonerName);
        if (index === -1)
            return;
        LeagueState_1.state.lcu.lobby.members[index].nickname = e.nickname;
    });
    ctx.LPTE.on(namespace, 'swap-player', (e) => {
        const playerOrder = LeagueState_1.state.lcu.lobby.playerOrder;
        playerOrder.forEach((po, i) => {
            if (po[2] === e.currentpos) {
                playerOrder.get(i)[2] = e.droppedpos;
                LeagueState_1.state.lcu.lobby.members = LeagueState_1.state.lcu.lobby.members.map((p) => {
                    if (p.summonerName === i) {
                        return { ...p, sortedPosition: e.droppedpos };
                    }
                    else {
                        return p;
                    }
                });
                return;
            }
            if (e.currentpos < e.droppedpos) {
                if (po[2] <= e.droppedpos) {
                    playerOrder.get(i)[2] -= 1;
                    LeagueState_1.state.lcu.lobby.members = LeagueState_1.state.lcu.lobby.members.map((p) => {
                        if (p.summonerName === i) {
                            return { ...p, sortedPosition: p.sortedPosition - 1 };
                        }
                        else {
                            return p;
                        }
                    });
                    return;
                }
            }
            else if (e.currentpos > e.droppedpos) {
                if (po[2] >= e.droppedpos) {
                    playerOrder.get(i)[2] += 1;
                    LeagueState_1.state.lcu.lobby.members = LeagueState_1.state.lcu.lobby.members.map((p) => {
                        if (p.summonerName === i) {
                            return { ...p, sortedPosition: p.sortedPosition + 1 };
                        }
                        else {
                            return p;
                        }
                    });
                    return;
                }
            }
        });
        LeagueState_1.state.lcu.lobby.playerOrder = playerOrder;
        LeagueState_1.state.lcu.lobby.members.sort((a, b) => {
            return a.sortedPosition < b.sortedPosition
                ? -1
                : a.sortedPosition > b.sortedPosition
                    ? 1
                    : 0;
        });
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
    ctx.LPTE.on('module-league-static', 'static-loaded', async (e) => {
        exports.leagueStatic = e.constants;
        lcuDataReaderController = new LCUDataReaderController_1.LCUDataReaderController(ctx, config.recordChampselect);
    });
};
//# sourceMappingURL=plugin.js.map