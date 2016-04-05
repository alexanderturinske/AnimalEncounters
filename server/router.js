var express = require('express');
var cors = require('cors');
var Animal = require('./schema');
var router = express.Router();
router.use(cors());

router.use('/', express.static(__dirname + '/../client'));

router.route('/animals')
  .options(function(req, res) {
     res.status(200).send(req.body);
  })
  .get(function(req, res) {
    Animal.find({})
      .exec(function(err, animals) {
        res.status(200).json(animals);
      });
  })
  .post(function(req, res) {
    Animal.findOne({ name: req.body.animal })
      .exec(function(err, animal) {
        if (!animal) {
          new Animal({ name: req.body.animal })
            .save(function(err, addedAnimal) {
              if (err) {
                return console.log(err);
              }
              console.log(addedAnimal + ' has been added!');
            });
        } else {
          console.log('You\'ve encountered the ' + animal.name + ' already!');
        }
      });
    res.status(200).send(req.body);
  });

module.exports = router;