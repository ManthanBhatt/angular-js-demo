angular.module('teamManager.home', [])
  .controller('HomeCtrl', function ($scope, dataService) {
    
    function setData() {
      $scope.playerCount = dataService.getPlayers().length;
      $scope.teamCount = dataService.getTeams().length;
      $scope.matchCount = dataService.getMatches().length;
    }
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (toState.name === 'home') {
        setData();
      }
    });

  });
