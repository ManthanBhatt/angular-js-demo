angular.module('teamManager.teams', [])
    .controller('TeamsCtrl', function ($scope, dataService, $state) {
        $scope.teams = dataService.getTeams(true);
        console.log('teams', $scope.teams);
        $scope.players = dataService.getPlayers();
        $scope.showForm = false;
        $scope.team = {};

        $scope.getTeams = function () {
            $scope.teams = dataService.getTeams(true);
        }

        $scope.getPlayers = function () {
            $scope.players = dataService.getPlayers();
            $scope.player = $scope.players.filter(player => {
                player.selected = false;
                return player;
            })
        }

        $scope.openForm = function (rInd = -1, ind = -1) {
            $scope.getPlayers();
            $scope.showForm = true;
            $scope.team = {};
            if (rInd > -1 && ind > -1) {
                const teams = $scope.teams[rInd];
                $scope.team = angular.copy(teams[ind]);
                $scope.team.players.forEach(id => {
                    const ind = $scope.players.findIndex(p => p.id === id);
                    if(ind > -1) {
                        $scope.players[ind].selected = true;
                    }
                })
            }
            setTimeout(() => {
                document.getElementById('name').focus();
            }, 1000);
        }

        $scope.closeForm = function () {
            $scope.showForm = false;
            $scope.team = {};
            $scope.getTeams();
        };

        $scope.save = function () {
            if ($scope.team.id) {
                $scope.update();
            } else {
                $scope.add();
            }
        }

        $scope.add = function () {
            $scope.setPlayers();
            dataService.addTeam($scope.team);
            $scope.showForm = false;
            $scope.getTeams();
        };

        $scope.update = function () {
            $scope.setPlayers();
            dataService.updateTeam($scope.team.id, $scope.team);
            $scope.showForm = false;
            $scope.getTeams();
        };

        $scope.setPlayers = function () {
            console.log($scope.team, $scope.players);
            const players = $scope.players.filter(player => player.selected === true).map(player => player.id);
            $scope.team.players = players;
        }

        $scope.remove = function (rInd, ind) {
            const teams = $scope.teams[rInd];
            const team = teams[ind];
            const resp = confirm(`Are you sure you want to remove ${team.name}?`);
            if (resp) {
                dataService.removeTeam(team.id);
            }
            $scope.getTeams();
        };
    });
