"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StaticData_1 = __importDefault(require("./StaticData"));
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
        return ctx.log.warn(`${namespace} config could not be loaded`);
    }
    const config = configRes.config;
    const staticData = new StaticData_1.default(ctx, config);
    ctx.LPTE.emit({
        meta: {
            type: 'add-serves',
            namespace: 'ui',
            version: 1
        },
        serves: [
            {
                frontend: 'frontend',
                id: namespace
            }
        ]
    });
    staticData.onReady(() => {
        const gameStatic = {
            seasons: require(`../frontend/data/constants/seasons.json`),
            queues: require(`../frontend/data/constants/queues.json`),
            maps: require(`../frontend/data/en_US/map.json`),
            gameModes: require(`../frontend/data/constants/gameModes.json`),
            gameTypes: require(`../frontend/data/constants/gameTypes.json`),
            perks: require(`../frontend/data/en_US/runesReforged.json`),
            champions: Object.values(require(`../frontend/data/en_US/champion.json`).data),
            items: Object.values(require(`../frontend/data/en_US/item.json`).data),
            itemBin: Object.values(require(`../frontend/data/item.bin.json`)),
            version: staticData.version
        };
        ctx.LPTE.on(namespace, 'request-constants', (e) => {
            ctx.LPTE.emit({
                meta: {
                    type: e.meta.reply,
                    namespace: 'reply',
                    version: 1,
                    reply: e.meta.reply
                },
                constants: gameStatic
            });
        });
        ctx.LPTE.emit({
            meta: {
                namespace,
                type: 'static-loaded',
                version: 1
            },
            constants: gameStatic
        });
        ctx.LPTE.emit({
            meta: {
                type: 'plugin-status-change',
                namespace: 'lpt',
                version: 1
            },
            status: 'RUNNING'
        });
    });
};
//# sourceMappingURL=plugin.js.map