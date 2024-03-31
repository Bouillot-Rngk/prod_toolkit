"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
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
                name: `vMix`,
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
        ip: '127.0.0.1',
        port: 8088
    }, configRes === null || configRes === void 0 ? void 0 : configRes.config);
    ctx.LPTE.on(namespace, 'set-settings', async (e) => {
        ;
        (config.ip = e.ip), (config.port = e.port);
        ctx.LPTE.emit({
            meta: {
                type: 'set',
                namespace: 'plugin-config',
                version: 1
            },
            config: {
                ip: config.ip,
                port: config.port
            }
        });
    });
    ctx.LPTE.on(namespace, 'get-settings', (e) => {
        ctx.LPTE.emit({
            meta: {
                type: e.meta.reply,
                namespace: 'reply',
                version: 1
            },
            ip: config.ip,
            port: config.port
        });
    });
    async function executeFunc(func) {
        var _a, _b, _c, _d;
        try {
            ctx.log.debug(`Executing function ${func}`);
            await axios_1.default.get(`http://${config.ip}:${config.port}/api/?${func}`);
        }
        catch (error) {
            const e = error;
            ctx.log.error(`Function could not be executed ${(_b = (_a = e.response) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : 404}: ${(_d = (_c = e.response) === null || _c === void 0 ? void 0 : _c.statusText) !== null && _d !== void 0 ? _d : 'vMix could not be reached'}`);
        }
    }
    ctx.LPTE.on(namespace, 'delete', async (e) => {
        await ctx.LPTE.request({
            meta: {
                type: 'deleteOne',
                namespace: 'plugin-database',
                version: 1
            },
            collection: 'vmix',
            id: e.id
        });
        ctx.LPTE.unregister(e.namespace, e.listener);
        const res = await ctx.LPTE.request({
            meta: {
                type: 'request',
                namespace: 'plugin-database',
                version: 1
            },
            collection: 'vmix',
            limit: 30
        });
        if (res === undefined || res.data === undefined) {
            ctx.log.warn('vmix functions could not be loaded');
        }
        ctx.LPTE.emit({
            meta: {
                type: 'update-vmix-set',
                namespace,
                version: 1
            },
            functions: res === null || res === void 0 ? void 0 : res.data
        });
    });
    ctx.LPTE.on(namespace, 'add', async (e) => {
        await ctx.LPTE.request({
            meta: {
                type: 'insertOne',
                namespace: 'plugin-database',
                version: 1
            },
            collection: 'vmix',
            data: {
                namespace: e.namespace,
                listener: e.listener,
                function: e.function
            }
        });
        ctx.LPTE.on(e.namespace, e.listener, async () => {
            await executeFunc(e.function);
        });
        const res = await ctx.LPTE.request({
            meta: {
                type: 'request',
                namespace: 'plugin-database',
                version: 1
            },
            collection: 'vmix',
            limit: 30
        });
        if (res === undefined || res.data === undefined) {
            ctx.log.warn('vmix functions could not be loaded');
        }
        ctx.LPTE.emit({
            meta: {
                type: 'update-vmix-set',
                namespace,
                version: 1
            },
            functions: res === null || res === void 0 ? void 0 : res.data
        });
    });
    ctx.LPTE.on(namespace, 'request', async (e) => {
        const res = await ctx.LPTE.request({
            meta: {
                type: 'request',
                namespace: 'plugin-database',
                version: 1
            },
            collection: 'vmix',
            limit: 30
        });
        if (res === undefined || res.data === undefined) {
            ctx.log.warn('vmix functions could not be loaded');
        }
        ctx.LPTE.emit({
            meta: {
                type: e.meta.reply,
                namespace: 'reply',
                version: 1
            },
            functions: res === null || res === void 0 ? void 0 : res.data
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
    const res = await ctx.LPTE.request({
        meta: {
            type: 'request',
            namespace: 'plugin-database',
            version: 1
        },
        collection: 'vmix',
        limit: 30
    });
    if (res === undefined || res.data === undefined) {
        return ctx.log.warn('vmix functions could not be loaded');
    }
    res.data.forEach((f) => {
        ctx.LPTE.on(f.namespace, f.listener, async () => {
            await executeFunc(f.function);
        });
    });
};
//# sourceMappingURL=plugin.js.map