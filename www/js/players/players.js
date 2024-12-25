angular.module('teamManager.players', [])
  .controller('PlayersCtrl', function ($scope, dataService, $state) {
    $scope.players = dataService.getPlayers();
    $scope.showForm = false;
    $scope.player = {};

    $scope.getPlayers = function () {
      $scope.players = dataService.getPlayers();
    }

    $scope.openForm = function (ind = -1) {
      $scope.showForm = true;
      $scope.player = {};
      if (ind > -1) {
        $scope.player = angular.copy($scope.players[ind]);
      }
      setTimeout(() => {
        document.getElementById('first_name').focus();
      }, 1000);
    }

    $scope.closeForm = function () {
      $scope.showForm = false;
      $scope.player = {};
    };

    $scope.savePlayer = function () {
      if ($scope.player.id) {
        $scope.updatePlater();
      } else {
        $scope.addPlayer();
      }
    }

    $scope.addPlayer = function () {
      dataService.addPlayer($scope.player);
      $scope.showForm = false;
      $scope.getPlayers();
    };

    $scope.updatePlater = function () {
      const ind = $scope.players.findIndex(p => p.id === $scope.player.id);
      if (ind > -1) {
        dataService.updatePlayer(ind, $scope.player);
        $scope.showForm = false;
        $scope.getPlayers();
      }
    };

    $scope.removePlayer = function (ind) {
      const player = $scope.players[ind];
      const resp = confirm(`Are you sure you want to remove ${player.first_name} ${player.last_name}?`);
      if (resp) {
        $scope.players.splice(ind, 1);
        dataService.removePlayer(ind);
      }
    };
  });
