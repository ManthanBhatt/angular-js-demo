angular.module('teamManager.matches', [])
    .controller('MatchesCtrl', function ($scope, dataService, $state) {
        $scope.matches = dataService.getMatches();

        $scope.addMatch = function () {
            // Navigate to add match form (we'll handle that separately)
            $state.go('addMatch');
        };
    });
