var express = require('express');
var cors = require('cors');
var Animal = require('./schema');

// create router
var router = express.Router();

// use middleware to handle CORS headers and status responses
router.use(cors());

// handle routes to '/animals'
// the route is '/', but stands for '/animals' because '/animals' was required to get here from the server
router.route('/')
  // options request
  .options(function(req, res) {
     res.status(200).send(req.body);
  })
  // get requests returns the animals from the database
  // TODO create a helper function to do the database work and put it in a separate file
  .get(function(req, res) {
    Animal.find({})
      .exec(function(err, animals) {
        res.status(200).json(animals);
      });
  })
  // post requests adds an animal to the database
  // TODO create a helper function to do the database work and put it in a separate file
  .post(function(req, res) {
    Animal.findOne({ name: req.body.animal })
      .exec(function(err, animal) {
        if (!animal) {
          new Animal({ name: req.body.animal })
            .save(function(err, addedAnimal) {
              if (err) {
                return console.log(err);
              }
            });
        } else {
          return console.log('You\'ve encountered the ' + animal.name + ' already!');
        }
      });
    res.status(200).send(req.body);
  });

module.exports = router;