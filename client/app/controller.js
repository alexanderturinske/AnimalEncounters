angular.module('faunadexApp.ctrl1', [])

.controller('AnimalController', function($scope, Click) {
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

  $scope.addAnimal = function() {
    Click.sendData($scope.newAnimal);
  };
});