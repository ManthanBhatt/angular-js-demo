angular.module('teamManager', ['ionic', 'teamManager.login', 'teamManager.home', 'teamManager.players', 'teamManager.teams', 'teamManager.matches', 'teamManager.services', 'components', 'utils.autofocus', 'utils.validateEmail'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
      })
      .state('players', {
        url: '/players',
        templateUrl: 'js/players/players.html',
        controller: 'PlayersCtrl'
      })
      .state('teams', {
        url: '/teams',
        templateUrl: 'js/teams/teams.html',
        controller: 'TeamsCtrl'
      })
      .state('matches', {
        url: '/matches',
        templateUrl: 'js/matches/matches.html',
        controller: 'MatchesCtrl'
      });

    $urlRouterProvider.otherwise('/login');
  })
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }).filter('titleCase', function () {
    return titleCase;
  });
