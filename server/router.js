var express = require('express');
var router = express.Router();

router.use('/', express.static(__dirname + '../client'));

router.route('/')
  .options(function(req, res) {
     res.status(200).send('OPTIONS request');
  })
  .get(function(req, res) {
    res.status(200).send('Get request!');
  })
  .post(function(req, res) {
    res.status(200).send('Post request!');
  });

module.exports = router;