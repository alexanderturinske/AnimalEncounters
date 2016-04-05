// main angular module/router
angular.module('faunadexApp', [
  'ui.router',
  'faunadexApp.ctrl1',
  'faunadexApp.factory1'
])

// handles routing
.config(function($stateProvider, $urlRouterProvider) {
  // setup misc. routing
  $urlRouterProvider.otherwise('/view');

  $stateProvider
    // setup default view state
    .state('view', {
      url: '/view',
      templateUrl: 'app/template.html',
      controller: 'AnimalController'
    });
});