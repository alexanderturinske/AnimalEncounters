var faunadexApp = angular.module('faunadexApp', [])

.factory('Click', function($http) {
  var click = {};

  click.sendData = function(animal) {
    console.log('Animal sent to database!');
    $http({
      method: 'POST',
      url: '/',
      data: {animal: animal}
    }).then(function success(res) {
      console.log('There was a POST success');
    }).then(function error(res) {
      console.log('There was a POST error!');
    });
  };

  click.retrieveData = function() {
    $http({
      method: 'GET',
      url: '/',
    }).then(function success(res) {
      console.log('There was a GET success');
    }).then(function error(res) {
      console.log('There was a GET error!');
    });
  };

  return click;
})

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