angular.module('teamManager.matches', [])
    .controller('MatchesCtrl', function ($scope, dataService, $state) {
        $scope.matches = dataService.getMatches();
        $scope.teams = dataService.getTeams();
        $scope.players = dataService.getPlayers();
        $scope.showForm = false;
        $scope.match = {};

        $scope.getMatches = function () {
            $scope.matches = dataService.getMatches();
        }

        $scope.getTeams = function () {
            $scope.teams = dataService.getTeams();
        }

        $scope.getPlayers = function () {
            $scope.players = dataService.getPlayers();
        }

        $scope.openForm = function (rInd = -1, ind = -1) {
            $scope.showForm = true;
            $scope.match = {};
            if (rInd > -1 && ind > -1) {
                const match = $scope.matches[rInd];
                $scope.match = angular.copy(match[ind]);
                $scope.match.date = new Date($scope.match.date);
            }
        }

        $scope.closeForm = function () {
            $scope.showForm = false;
            $scope.match = {};
        };

        $scope.save = function () {
            if ($scope.match.id) {
                $scope.update();
            } else {
                $scope.add();
            }
        }

        $scope.add = function () {
            $scope.setDate();
            dataService.addMatch($scope.match);
            $scope.showForm = false;
            $scope.getMatches();
        };

        $scope.update = function () {
            $scope.setDate();
            dataService.updateMatch($scope.match.id, $scope.match);
            $scope.showForm = false;
            $scope.getMatches();
        };

        $scope.setDate = function() {
            $scope.match.date = $scope.match.date.toISOString().split('T')[0];
        }

        $scope.remove = function (rInd, ind) {
            const matches = $scope.matches[rInd];
            const match = matches[ind];
            const resp = confirm(`Are you sure you want to remove the match?`);
            if (resp) {
                dataService.removeMatch(match.id);
                $scope.getMatches();
            }
        };
    });
