angular.module('teamManager.players', [])
  .controller('PlayersCtrl', function ($scope, dataService, $state) {
    $scope.players = dataService.getPlayers();

    $scope.addPlayer = function () {
      // Navigate to the add player form (we'll handle that separately)
      $state.go('addPlayer');
    };

    $scope.editPlayer = function (player) {
      // Navigate to edit player form with the player data
      $state.go('editPlayer', { playerId: player.id });
    };

    $scope.removePlayer = function (player) {
      var index = $scope.players.indexOf(player);
      dataService.removePlayer(index);
      $scope.players = dataService.getPlayers(); // Refresh the list
    };
  });
