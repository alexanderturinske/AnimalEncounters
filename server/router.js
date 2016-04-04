var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();

reouter.use('/', express.static(__dirname + '../client'));

router.get('/', function(req, res) {
  res.send('Get request!');
});

router.post('/', function(req, res) {
  res.send('Post request!');
});