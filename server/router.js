var express = require('express');
var cors = require('cors');
var router = express.Router();
router.use(cors());

router.use('/', express.static(__dirname + '/../client'));

router.route('/')
  .options(function(req, res) {
     res.status(200).send('OPTIONS request');
  })
  .get(function(req, res) {
    res.status(200).send(__dirname + '/../client');
  })
  .post(function(req, res) {
    res.status(200).send('POST request!');
  });

module.exports = router;