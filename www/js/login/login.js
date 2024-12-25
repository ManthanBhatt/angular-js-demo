// www/js/login/login.js
angular.module('teamManager.login', [])
  .controller('LoginCtrl', function($scope, $state, $ionicPlatform) {
    $scope.user = {};
    $scope.errorMessage = "";

    $scope.login = function() {
      if($scope.user.email !== 'admin@mail.com' || $scope.user.password !== "admin123") {
        $scope.errorMessage = "Invalid email or password";
        return;
      }
      console.log('Logging in with', $scope.user);
      $state.go('home'); // Redirect to home page after login
    };
  });
