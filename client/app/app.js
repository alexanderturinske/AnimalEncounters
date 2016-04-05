angular.module('faunadexApp', [
  'ui.router',
  'faunadexApp.ctrl1',
  'faunadexApp.factory1'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/state1');

  $stateProvider
    .state('state1', {
      url: '/state1',
      templateUrl: 'app/template.html',
      controller: 'AnimalController'
    });
});