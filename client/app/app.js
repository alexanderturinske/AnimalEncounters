// main angular module/router
angular.module('faunadexApp', [
  'ui.router',
  'faunadexApp.animalCtrl',
  'faunadexApp.signInCtrl',
  'faunadexApp.signUpCtrl',
  'faunadexApp.factory1'
])

// handles routing
.config(function($stateProvider, $urlRouterProvider) {
  // setup misc. routing
  $urlRouterProvider.otherwise('/signin');

  $stateProvider
    // animal view
    .state('faunaList', {
      url: '/faunaList',
      templateUrl: 'app/templates/animalList.html',
      controller: 'AnimalController'
    })
    // signin view
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/templates/signIn.html',
      controller: 'SignInController'
    })
    // signup view
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/templates/signUp.html',
      controller: 'SignUpController'
    });
});