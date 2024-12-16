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

        var data = {
            players: getData('players'),
            teams: getData('teams'),
            matches: getData('matches')
        };

        return {
            getPlayers: function () {
                return data.players;
            },
            addPlayer: function (player) {
                player.id = getId();
                data.players.push(player);
                setData('players', data.players);
            },
            updatePlayer: function (index, player) {
                data.players[index] = player;
                setData('players', data.players);
            },
            removePlayer: function (index) {
                data.players.splice(index, 1);
                setData('players', data.players);
            },

            getTeams: function () {
                return data.teams;
            },
            addTeam: function (team) {
                team.id = getId();
                data.teams.push(team);
                setData('teams', data.teams);
            },
            updateTeam: function (index, team) {
                data.teams[index] = team;
                setData('teams', data.teams);
            },
            removeTeam: function (index) {
                data.teams.splice(index, 1);
                setData('teams', data.teams);
            },

            getMatches: function () {
                return data.matches;
            },
            addMatch: function (match) {
                match.id = getId();
                data.matches.push(match);
                setData('matches', data.matches);
            }
        };
    });
