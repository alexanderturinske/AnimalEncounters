var express = require('express');
var cors = require('cors');
var User = require('./../models/Users');

// create router
var userRouter = express.Router();

// use middleware to handle CORS headers and status responses
userRouter.use(cors());

// handle routes to '/animals'
// the route is '/', but stands for '/animals' because '/animals' was required to get here from the server
userRouter.route('/signin')
  // options request
  .options(function(req, res) {
     res.status(200).send(req.body);
  })
  // post requests adds an animal to the database
  // TODO create a helper function to do the database work and put it in a separate file
  .post(function(req, res) {
    User.findOne({ username: req.body.username })
      .exec(function(err, user) {
        if (user) {
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) {
              throw err;
            }
            res.status(200).send(isMatch);
          })
        } else {
          res.status(300).send('That username already exists!');
        }
      });
    res.status(200).send(req.body);
  });

userRouter.route('/signup')
  // options request
  .options(function(req, res) {
     res.status(200).send(req.body);
  })
  // post requests adds an animal to the database
  // TODO create a helper function to do the database work and put it in a separate file
  .post(function(req, res) {
    console.log('POST!');
    User.findOne({ username: req.body.username })
      .exec(function(err, user) {
        if (!user) {
          new User({ username: req.body.username, password: req.body.password })
            .save(function(err, addedUser) {
              if (err) {
                return console.log(err);
              }
            });
        } else {
          res.status(300).send(false);
        }
      });
    res.status(200).send(true);
  });
module.exports = userRouter;