angular.module('teamManager.players', [])
  .controller('PlayersCtrl', function ($scope, dataService, $state) {
    $scope.players = dataService.getPlayers(true);
    $scope.showForm = false;
    $scope.player = {};

    $scope.getPlayers = function () {
      $scope.players = dataService.getPlayers(true);
      console.log($scope.players);
    }

    $scope.openForm = function (rInd = -1, ind = -1) {
      $scope.showForm = true;
      $scope.player = {};
      if (rInd > -1 && ind > -1) {
        const players = $scope.players[rInd];
        $scope.player = angular.copy(players[ind]);
      }
      setTimeout(() => {
        document.getElementById('first_name').focus();
      }, 1000);
    }

    $scope.closeForm = function () {
      $scope.showForm = false;
      $scope.player = {};
      $scope.getPlayers();
    };

    $scope.save = function () {
      if ($scope.player.id) {
        $scope.update();
      } else {
        $scope.add();
      }
    }

    $scope.add = function () {
      dataService.addPlayer($scope.player);
      $scope.showForm = false;
      $scope.getPlayers();
    };

    $scope.update = function () {
      dataService.updatePlayer($scope.player.id, $scope.player);
      $scope.showForm = false;
      $scope.getPlayers();
    };

    $scope.remove = function (rInd, ind) {
      const players = $scope.players[rInd];
      const player = players[ind];
      const resp = confirm(`Are you sure you want to remove ${player.first_name} ${player.last_name}?`);
      if (resp) {
        dataService.removePlayer(player.id);
      }
      $scope.getPlayers();
    };
  });
