angular.module('teamManager.teams', [])
    .controller('TeamsCtrl', function ($scope, dataService, $state) {
        $scope.teams = dataService.getTeams();

        $scope.addTeam = function () {
            $state.go('addTeam');
        };

        $scope.editTeam = function (team) {
            $state.go('editTeam', { teamId: team.id });
        };

        $scope.removeTeam = function (team) {
            var index = $scope.teams.indexOf(team);
            dataService.removeTeam(index);
            $scope.teams = dataService.getTeams(); // Refresh the list
        };
    });
