angular.module('teamManager.services', [])
    .factory('dataService', function () {
        const getData = (key) => {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        }

        const setData = (key, data) => {
            localStorage.setItem(key, JSON.stringify(data));
        }

        const getId = () => {
            return new Date().getTime();
        }

        const chunkWise = (arr, chunk) => {
            return arr.reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / chunk)

                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = [] // start a new chunk
                }
                resultArray[chunkIndex].push(item)
                return resultArray
            }, [])
        }

        const getInd = (arr, data, key) => {
            return arr.findIndex(x => x[key] === data);
        }

        const setTeamObj = (match, team_id, key) => {
            const ind = getInd(data.teams, parseInt(team_id), 'id');
            match[key] = data.teams[ind];
            match[key].players = match[key].players.map(player_id => {
                const ind = getInd(data.players, player_id, 'id');
                return ind === -1 ? false : data.players[ind];
            });
            return match[key];
        }

        var data = {
            players: getData('players'),
            teams: getData('teams'),
            matches: getData('matches')
        };

        return {
            getPlayers: function (split = false) {
                return split ? chunkWise(data.players, 3) : data.players;
            },
            addPlayer: function (player) {
                player.id = getId();
                data.players.push(player);
                setData('players', data.players);
            },
            updatePlayer: function (id, player) {
                const index = getInd(data.players, id, 'id');
                if (index === -1) return;
                data.players[index] = player;
                setData('players', data.players);
            },
            removePlayer: function (id) {
                const index = getInd(data.players, id, 'id');
                if (index === -1) return;
                data.players.splice(index, 1);
                setData('players', data.players);
            },

            getTeams: function (split = false) {
                return split ? chunkWise(data.teams, 3) : data.teams;
            },
            addTeam: function (team) {
                team.id = getId();
                data.teams.push(team);
                setData('teams', data.teams);
            },
            updateTeam: function (id, team) {
                const index = getInd(data.teams, id, 'id');
                if (index === -1) return;
                data.teams[index] = team;
                setData('teams', data.teams);
            },
            removeTeam: function (id) {
                const index = getInd(data.teams, id, 'id');
                if (index === -1) return;
                data.teams.splice(index, 1);
                setData('teams', data.teams);
            },
            getMatches: function () {
                data.matches = data.matches.filter(function (match) {
                    match.team_one = setTeamObj(match,match.team_one_id, "team_one");
                    match.team_two = setTeamObj(match,match.team_two_id, "team_two");
                    return match;
                });
                return chunkWise(data.matches, 3);
            },
            addMatch: function (match) {
                match.id = getId();
                data.matches.push(match);
                setData('matches', data.matches);
            },
            updateMatch: function (id, match) {
                const index = getInd(data.matches, id, 'id');
                if (index === -1) return;
                data.matches[index] = match;
                setData('matches', data.matches);
            },
            removeMatch: function (id) {
                const index = getInd(data.matches, id, 'id');
                if (index === -1) return;
                data.matches.splice(index, 1);
                setData('matches', data.matches);
            },
        };
    });
