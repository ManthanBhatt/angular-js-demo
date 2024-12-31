angular.module('teamManager.players', [])
  .controller('PlayersCtrl', function ($scope, dataService, $state) {
    $scope.players = dataService.getPlayers(true);
    $scope.showForm = false;
    $scope.player = {};

    $scope.getPlayers = function () {
      $scope.players = dataService.getPlayers(true);
    }

    $scope.openForm = function (rInd = -1, ind = -1) {
      $scope.showForm = true;
      $scope.player = {};
      if (rInd > -1 && ind > -1) {
        const players = $scope.players[rInd];
        $scope.player = angular.copy(players[ind]);
      }
    }

    $scope.closeForm = function () {
      $scope.showForm = false;
      $scope.player = {};
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
      const teams = dataService.getTeams();
      let teamName = '';
      // this array contains the team names in which the player is currently playing.
      const partOfTeams = [];
      teams.forEach(team => {
        const ind = team.players.findIndex(p => p === player.id);
        if (ind > -1) {
          team.players.splice(ind, 1);
          partOfTeams.push(team);
          if (teamName === '') {
            teamName = team.name;
          } else {
            teamName += `, ${team.name}`;
          }
        }
      });
      const playerName = `${player.first_name} ${player.last_name}`;
      let msg = ''
      if (partOfTeams.length > 0) {
        msg = `${playerName} is also part of the following teams: ${teamName}\n`;
      }
      msg += `Are you sure you want to remove ${playerName}?`;
      const resp = confirm(msg);
      if (resp) {
        dataService.removePlayer(player.id);
        partOfTeams.forEach(team => dataService.updateTeam(team.id, team));
        $scope.getPlayers();
      }
    };
  });
