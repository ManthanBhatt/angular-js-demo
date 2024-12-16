// www/js/login/login.js
angular.module('teamManager.login', [])
  .controller('LoginCtrl', function($scope, $state, $ionicPlatform) {
    
    $scope.user = {};

    $scope.login = function() {
      console.log('Logging in with', $scope.user);
      $state.go('home'); // Redirect to home page after login
    };
  });
