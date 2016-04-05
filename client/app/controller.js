// main angular module/controller
angular.module('faunadexApp.ctrl1', [])

.controller('AnimalController', function($scope, Click) {
  // array to hold animals encountered
  $scope.animals = [];

  // add an animal to animals encountered
  $scope.addAnimal = function() {
    // Click.sendData returns a promise, so use .then to run the update method
    Click.sendData($scope.newAnimal)
      .then($scope.retrieveAnimal);
    $scope.newAnimal = null;
  };

  // retrieve animals that user has encountered
  $scope.retrieveAnimal = function() {
    // Click.retrieveData returns a promise, so one needs a .then to utilize the output of it
    Click.retrieveData().then(function(result) {
      $scope.animals = result;
    });
  };

});