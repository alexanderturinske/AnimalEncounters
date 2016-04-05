angular.module('faunadexApp.ctrl1', [])

.controller('AnimalController', function($scope, Click) {
  $scope.animals = [];

  $scope.addAnimal = function() {
    Click.sendData($scope.newAnimal);
    $scope.newAnimal = null;
  };

  $scope.retrieveAnimal = function() {
    Click.retrieveData($scope.animals);
    console.log('$scope.animals: ', $scope.animals);
  };

});