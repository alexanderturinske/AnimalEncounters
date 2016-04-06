// main angular module/controller
angular.module('faunadexApp.animalCtrl', [])

.controller('AnimalController', function($scope, Click) {
  // array to hold animals encountered
  $scope.animals = [];
  $scope.currentAnimal = 'Select an animal!';

  $scope.current = function(animal) {
    $scope.currentAnimal = animal.name;
  };

  // add an animal to animals encountered
  $scope.addAnimal = function() {
    // Click.sendData returns a promise, so use .then to run the update method
    Click.sendData('/api/animals', $scope.newAnimal)
      .then($scope.retrieveAnimal);
    $scope.newAnimal = null;
  };

  // retrieve animals that user has encountered
  $scope.retrieveAnimal = function() {
    // Click.retrieveData returns a promise, so one needs a .then to utilize the output of it
    Click.retrieveData('/api/animals').then(function(result) {
      $scope.animals = result;
    });
  };

  // run this immediately upon load to load animals
  $scope.retrieveAnimal();

});