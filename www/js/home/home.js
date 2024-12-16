angular.module('teamManager.home', [])
  .controller('HomeCtrl', function ($scope, dataService, $ionicPlatform) {
    $scope.playerCount = dataService.getPlayers().length;
    $scope.teamCount = dataService.getTeams().length;
    $scope.matchCount = dataService.getMatches().length;

    $ionicPlatform.ready(function() {
      $scope.playerCount = dataService.getPlayers().length;
      $scope.teamCount = dataService.getTeams().length;
      $scope.matchCount = dataService.getMatches().length;
    });
 
  });
