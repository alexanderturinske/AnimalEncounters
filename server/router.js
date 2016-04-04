var express = require('express');
var cors = require('cors');
var router = express.Router();
router.use(cors());

router.use('/', express.static(__dirname + '/../client'));

router.route('/')
  .options(function(req, res) {
     res.status(200).send(req.body);
  })
  .get(function(req, res) {
    res.status(200).send(req.body);
  })
  .post(function(req, res) {
    res.status(200).send(req.body);
  });

module.exports = router;