var faunadexApp = angular.module('faunadexApp', []);

faunadexApp.controller('AnimalController', function($scope) {
  $scope.animals = [
    {
      'name': 'Manatee',
      'danger_scale': 1
    },
    {
      'name': 'Elephant',
      'danger_scale': 8
    }
  ];
});