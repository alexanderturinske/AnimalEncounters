angular.module('faunadexApp.factory1', [])

.factory('Click', function($http) {
  var click = {};

  click.sendData = function(animal) {
    console.log('Animal sent to database!');
    return $http({
      method: 'POST',
      url: '/animals',
      data: {animal: animal}
    }).then(function success(res) {
      console.log('There was a POST success: ' + res.data.animal);
      return res;
    }, function error(res) {
      console.log('There was a POST error: ' + res.data);
      return res;
    });
  };

  click.retrieveData = function() {
    return $http({
      method: 'GET',
      url: '/animals',
    }).then(function(res) {
      return res.data;
    });
  };

  return click;
});
