"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Predictions = void 0;
const axios_1 = __importDefault(require("axios"));
class Predictions {
    constructor(namespace, config, ctx) {
        this.namespace = namespace;
        this.config = config;
        this.ctx = ctx;
        this.gfxState = {
            teams: {},
            bestOf: 1,
            show: false,
            prediction: {
                inProgress: false,
                id: '',
                length: 240,
                status: '',
                outcomes: []
            }
        };
    }
    async startPrediction(time = 240) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const game = (((_a = this.gfxState.teams.blueTeam) === null || _a === void 0 ? void 0 : _a.score) || 0) +
            (((_b = this.gfxState.teams.redTeam) === null || _b === void 0 ? void 0 : _b.score) || 0) +
            1;
        if (this.config.usePoll) {
            try {
                const res = await axios_1.default.post(Predictions.pollUrl, {
                    broadcaster_id: this.config.broadcastId,
                    title: `Who wins game ${game}?`,
                    duration: time,
                    choices: [
                        {
                            title: (_c = this.gfxState.teams.blueTeam) === null || _c === void 0 ? void 0 : _c.name
                        },
                        {
                            title: (_d = this.gfxState.teams.redTeam) === null || _d === void 0 ? void 0 : _d.name
                        }
                    ]
                }, {
                    headers: {
                        Authorization: `Bearer ${this.config.token}`,
                        'Client-Id': this.config.appId
                    }
                });
                const json = res.data;
                this.gfxState.prediction = {
                    inProgress: true,
                    id: json.data[0].id,
                    length: json.data[0].duration,
                    outcomes: json.data[0].choices,
                    status: json.data[0].status
                };
                this.ctx.LPTE.emit({
                    meta: {
                        namespace: this.namespace,
                        type: 'update',
                        version: 1
                    },
                    state: this.gfxState
                });
                this.timer = setInterval(() => {
                    this.getPrediction();
                }, 5000);
            }
            catch (error) {
                const e = error;
                this.ctx.log.error(`Request failed with status code ${(_e = e.response) === null || _e === void 0 ? void 0 : _e.status}: ${(_f = e.response) === null || _f === void 0 ? void 0 : _f.statusText}. ${(_g = e.response) === null || _g === void 0 ? void 0 : _g.data.message}`);
            }
        }
        else {
            try {
                const res = await axios_1.default.post(Predictions.url, {
                    broadcaster_id: this.config.broadcastId,
                    title: `Who wins game ${game}?`,
                    prediction_window: time,
                    outcomes: [
                        {
                            title: (_h = this.gfxState.teams.blueTeam) === null || _h === void 0 ? void 0 : _h.name
                        },
                        {
                            title: (_j = this.gfxState.teams.redTeam) === null || _j === void 0 ? void 0 : _j.name
                        }
                    ]
                }, {
                    headers: {
                        Authorization: `Bearer ${this.config.token}`,
                        'Client-Id': this.config.appId
                    }
                });
                const json = res.data;
                this.gfxState.prediction = {
                    inProgress: true,
                    id: json.data[0].id,
                    length: json.data[0].prediction_window,
                    outcomes: json.data[0].outcomes,
                    status: json.data[0].status
                };
                this.ctx.LPTE.emit({
                    meta: {
                        namespace: this.namespace,
                        type: 'update',
                        version: 1
                    },
                    state: this.gfxState
                });
                this.timer = setInterval(() => {
                    this.getPrediction();
                }, 5000);
            }
            catch (error) {
                const e = error;
                this.ctx.log.error(`Request failed with status code ${(_k = e.response) === null || _k === void 0 ? void 0 : _k.status}: ${(_l = e.response) === null || _l === void 0 ? void 0 : _l.statusText}. ${(_m = e.response) === null || _m === void 0 ? void 0 : _m.data.message}`);
            }
        }
        return this.gfxState;
    }
    async cancelPrediction() {
        var _a, _b, _c, _d, _e, _f;
        if (this.config.usePoll) {
            try {
                const url = `${Predictions.pollUrl}?broadcaster_id=${this.config.broadcastId}&id=${this.gfxState.prediction.id}&status=ARCHIVED`;
                const res = await axios_1.default.patch(url, {}, {
                    headers: {
                        Authorization: `Bearer ${this.config.token}`,
                        'Client-Id': this.config.appId
                    }
                });
                const json = res.data;
                this.gfxState.prediction.inProgress = false;
                this.gfxState.prediction.status = json.data[0].status;
                this.ctx.LPTE.emit({
                    meta: {
                        namespace: this.namespace,
                        type: 'update',
                        version: 1
                    },
                    state: this.gfxState
                });
                if (this.timer) {
                    clearInterval(this.timer);
                }
            }
            catch (error) {
                const e = error;
                this.ctx.log.error(`Request failed with status code ${(_a = e.response) === null || _a === void 0 ? void 0 : _a.status}: ${(_b = e.response) === null || _b === void 0 ? void 0 : _b.statusText}. ${(_c = e.response) === null || _c === void 0 ? void 0 : _c.data.message}`);
            }
        }
        else {
            try {
                const url = `${Predictions.url}?broadcaster_id=${this.config.broadcastId}&id=${this.gfxState.prediction.id}&status=CANCELED`;
                const res = await axios_1.default.patch(url, {}, {
                    headers: {
                        Authorization: `Bearer ${this.config.token}`,
                        'Client-Id': this.config.appId
                    }
                });
                const json = res.data;
                this.gfxState.prediction.inProgress = false;
                this.gfxState.prediction.status = json.data[0].status;
                this.ctx.LPTE.emit({
                    meta: {
                        namespace: this.namespace,
                        type: 'update',
                        version: 1
                    },
                    state: this.gfxState
                });
                if (this.timer) {
                    clearInterval(this.timer);
                }
            }
            catch (error) {
                const e = error;
                this.ctx.log.error(`Request failed with status code ${(_d = e.response) === null || _d === void 0 ? void 0 : _d.status}: ${(_e = e.response) === null || _e === void 0 ? void 0 : _e.statusText}. ${(_f = e.response) === null || _f === void 0 ? void 0 : _f.data.message}`);
            }
        }
        return this.gfxState;
    }
    async resolvePrediction(winningOutcome) {
        var _a, _b, _c;
        if (!this.config.usePoll) {
            try {
                const url = `${Predictions.url}?broadcaster_id=${this.config.broadcastId}&id=${this.gfxState.prediction.id}&status=RESOLVED&winning_outcome_id=${winningOutcome}`;
                const res = await axios_1.default.patch(url, {}, {
                    headers: {
                        Authorization: `Bearer ${this.config.token}`,
                        'Client-Id': this.config.appId
                    }
                });
                const json = res.data;
                this.gfxState.prediction.inProgress = false;
                this.gfxState.prediction.status = json.data[0].status;
                this.ctx.LPTE.emit({
                    meta: {
                        namespace: this.namespace,
                        type: 'update',
                        version: 1
                    },
                    state: this.gfxState
                });
                if (this.timer) {
                    clearInterval(this.timer);
                }
            }
            catch (error) {
                const e = error;
                this.ctx.log.error(`Request failed with status code ${(_a = e.response) === null || _a === void 0 ? void 0 : _a.status}: ${(_b = e.response) === null || _b === void 0 ? void 0 : _b.statusText}. ${(_c = e.response) === null || _c === void 0 ? void 0 : _c.data.message}`);
            }
        }
        return this.gfxState;
    }
    async getPrediction() {
        var _a, _b, _c, _d, _e, _f;
        if (this.config.usePoll) {
            try {
                const url = `${Predictions.pollUrl}?broadcaster_id=${this.config.broadcastId}&id=${this.gfxState.prediction.id}`;
                const res = await axios_1.default.get(url, {
                    headers: {
                        Authorization: `Bearer ${this.config.token}`,
                        'Client-Id': this.config.appId
                    }
                });
                const json = res.data;
                this.gfxState.prediction.inProgress = false;
                (this.gfxState.prediction.outcomes = json.data[0].choices),
                    (this.gfxState.prediction.status = json.data[0].status);
                this.ctx.LPTE.emit({
                    meta: {
                        namespace: this.namespace,
                        type: 'update',
                        version: 1
                    },
                    state: this.gfxState
                });
                if ((json.data[0].status === 'COMPLETED' ||
                    json.data[0].status === 'TERMINATED' ||
                    json.data[0].status === 'MODERATED' ||
                    json.data[0].status === 'ARCHIVED') &&
                    this.timer) {
                    clearInterval(this.timer);
                }
            }
            catch (error) {
                const e = error;
                this.ctx.log.error(`Request failed with status code ${(_a = e.response) === null || _a === void 0 ? void 0 : _a.status}: ${(_b = e.response) === null || _b === void 0 ? void 0 : _b.statusText}. ${(_c = e.response) === null || _c === void 0 ? void 0 : _c.data.message}`);
            }
        }
        else {
            try {
                const url = `${Predictions.url}?broadcaster_id=${this.config.broadcastId}&id=${this.gfxState.prediction.id}`;
                const res = await axios_1.default.get(url, {
                    headers: {
                        Authorization: `Bearer ${this.config.token}`,
                        'Client-Id': this.config.appId
                    }
                });
                const json = res.data;
                this.gfxState.prediction.inProgress = false;
                (this.gfxState.prediction.outcomes = json.data[0].outcomes),
                    (this.gfxState.prediction.status = json.data[0].status);
                this.ctx.LPTE.emit({
                    meta: {
                        namespace: this.namespace,
                        type: 'update',
                        version: 1
                    },
                    state: this.gfxState
                });
                if ((json.data[0].status === 'LOCKED' ||
                    json.data[0].status === 'RESOLVED' ||
                    json.data[0].status === 'CANCELED') &&
                    this.timer) {
                    clearInterval(this.timer);
                }
            }
            catch (error) {
                const e = error;
                this.ctx.log.error(`Request failed with status code ${(_d = e.response) === null || _d === void 0 ? void 0 : _d.status}: ${(_e = e.response) === null || _e === void 0 ? void 0 : _e.statusText}. ${(_f = e.response) === null || _f === void 0 ? void 0 : _f.data.message}`);
            }
        }
        return this.gfxState;
    }
    async getUser(login) {
        var _a, _b, _c;
        try {
            const url = `${Predictions.userUrl}${login}`;
            const res = await axios_1.default.get(url, {
                headers: {
                    Authorization: `Bearer ${this.config.token}`,
                    'Client-Id': this.config.appId
                }
            });
            return res.data;
        }
        catch (error) {
            const e = error;
            this.ctx.log.error(`Request failed with status code ${(_a = e.response) === null || _a === void 0 ? void 0 : _a.status}: ${(_b = e.response) === null || _b === void 0 ? void 0 : _b.statusText}. ${(_c = e.response) === null || _c === void 0 ? void 0 : _c.data.message}`);
            return undefined;
        }
    }
}
exports.Predictions = Predictions;
Predictions.url = 'https://api.twitch.tv/helix/predictions';
Predictions.pollUrl = 'https://api.twitch.tv/helix/polls';
Predictions.userUrl = 'https://api.twitch.tv/helix/users?login=';
//# sourceMappingURL=Predictions.js.map