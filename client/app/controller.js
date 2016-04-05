// main angular module/controller
angular.module('faunadexApp.ctrl1', [])

.controller('AnimalController', function($scope, Click) {
  // array to hold animals encountered
  $scope.animals = [];

  // add an animal to animals encountered
  $scope.addAnimal = function() {
    // Click.sendData returns a promise, so if one were to want to do anything with the response, one would have to use .then
    Click.sendData($scope.newAnimal);
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