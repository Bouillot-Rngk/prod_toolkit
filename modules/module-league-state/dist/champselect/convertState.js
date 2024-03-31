"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertState = void 0;
const types_1 = require("./types");
const convertTeam = ({ team, actions, gameState, leagueStatic }) => {
    const newTeam = new types_1.Team();
    newTeam.picks = team
        .map((cell) => {
        var _a;
        const currentAction = actions.find((action) => !action.completed);
        const summonerSearch = (_a = gameState.lcu.lobby.members) === null || _a === void 0 ? void 0 : _a.find((member) => member.summonerId === cell.summonerId);
        /* cell.cellId = summonerSearch ? summonerSearch.sortedPosition : cell.cellId */
        const pick = new types_1.Pick(cell.cellId);
        pick.spell1 = {
            id: cell.spell1Id,
            icon: cell.spell1Id
                ? `/serve/module-league-static/img/summoner-spell/${cell.spell1Id}.png`
                : ''
        };
        pick.spell2 = {
            id: cell.spell2Id,
            icon: cell.spell2Id
                ? `/serve/module-league-static/img/summoner-spell/${cell.spell2Id}.png`
                : ''
        };
        const championSearch = leagueStatic.champions.find((c) => c.key === cell.championId.toString());
        let champion;
        if (championSearch !== undefined) {
            champion = championSearch;
        }
        pick.champion = {
            id: cell.championId,
            name: champion ? champion.name : '',
            idName: champion ? champion.id.toString() : '',
            loadingImg: champion
                ? `/serve/module-league-static/img/champion/loading/${champion.id}_0.jpg`
                : '',
            splashImg: champion
                ? `/serve/module-league-static/img/champion/splash/${champion.id}_0.jpg`
                : '',
            splashCenteredImg: champion
                ? `/serve/module-league-static/img/champion/centered/${champion.id}_0.jpg`
                : '',
            squareImg: champion
                ? `/serve/module-league-static/img/champion/tiles/${champion.id}_0.jpg`
                : ''
        };
        if (summonerSearch !== undefined) {
            pick.displayName = summonerSearch.nickname;
        }
        if (currentAction &&
            currentAction.type === types_1.ActionType.PICK &&
            currentAction.actorCellId === cell.cellId &&
            !currentAction.completed) {
            pick.isActive = true;
            newTeam.isActive = true;
        }
        return pick;
    })
        .sort((a, b) => {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
    const isInThisTeam = (cellId) => team.filter((cell) => cell.cellId === cellId).length !== 0;
    let isBanDetermined = false;
    newTeam.bans = actions
        .filter((action) => action.type === 'ban' && isInThisTeam(action.actorCellId))
        .map((action) => {
        const ban = new types_1.Ban();
        if (!action.completed && !isBanDetermined) {
            isBanDetermined = true;
            ban.isActive = true;
            newTeam.isActive = true;
            ban.champion = {};
            return ban;
        }
        const championSearch = leagueStatic.champions.filter((c) => c.key === action.championId.toString());
        let champion;
        if (championSearch.length > 0) {
            champion = championSearch[0];
        }
        ban.champion = {
            id: action.championId,
            name: champion ? champion.name : '',
            idName: champion ? champion.id.toString() : '',
            loadingImg: champion
                ? `/serve/module-league-static/img/champion/loading/${champion.id}_0.jpg`
                : '',
            splashImg: champion
                ? `/serve/module-league-static/img/champion/splash/${champion.id}_0.jpg`
                : '',
            splashCenteredImg: champion
                ? `/serve/module-league-static/img/champion/centered/${champion.id}_0.jpg`
                : '',
            squareImg: champion
                ? `/serve/module-league-static/img/champion/tiles/${champion.id}_0.jpg`
                : ''
        };
        return ban;
    });
    return newTeam;
};
const convertTimer = (timer, currentDate) => {
    const startOfPhase = timer.internalNowInEpochMs;
    const expectedEndOfPhase = startOfPhase + timer.adjustedTimeLeftInPhase;
    const countdown = expectedEndOfPhase - currentDate.getTime();
    const countdownSec = Math.floor(countdown / 1000);
    if (countdownSec < 0) {
        return 0;
    }
    return countdownSec;
};
const convertState = (gameState, champselect, leagueStatic) => {
    const currentDate = new Date();
    const startDate = gameState.lcu.champselect._created;
    const flattenedActions = [];
    champselect.actions.forEach((actionGroup) => {
        flattenedActions.push(...actionGroup);
    });
    const blueTeam = convertTeam({
        team: champselect.myTeam,
        actions: flattenedActions,
        gameState,
        leagueStatic
    });
    const redTeam = convertTeam({
        team: champselect.theirTeam,
        actions: flattenedActions,
        gameState,
        leagueStatic
    });
    const timer = convertTimer(champselect.timer, currentDate);
    const timeAfterStart = currentDate.getTime() - startDate.getTime();
    return {
        blueTeam,
        redTeam,
        timer,
        timeAfterStart,
        phase: champselect.timer.phase
    };
};
exports.convertState = convertState;
//# sourceMappingURL=convertState.js.map