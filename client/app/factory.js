angular.module('faunadexApp.factory1', [])

.factory('Click', function($http) {
  var click = {};

  click.sendData = function(animal) {
    console.log('Animal sent to database!');
    $http({
      method: 'POST',
      url: '/animals',
      data: {animal: animal}
    }).then(function success(res) {
      console.log('There was a POST success: ' + res.data.animal);
    }, function error(res) {
      console.log('There was a POST error: ' + res.data);
    });
  };

  click.retrieveData = function(variable) {
    $http({
      method: 'GET',
      url: '/animals',
    }).then(function success(res) {
      console.log('There was a GET success: ', res.data);
      variable = res.data;
    }, function error(res) {
      console.log('There was a GET error: ' + res.data);
    });
  };

  return click;
});
