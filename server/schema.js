var mongoose = require('mongoose');
var db = require('./database');

var animalSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  encounter: {
    type: Date,
    default: Date.now
  }
});

var Animal = mongoose.model('Animal', animalSchema);

// test information
var octopus = new Animal({
  name: 'Octopus'
});
var elephant = new Animal({
  name: 'Elephant'
});
var parrot = new Animal({
  name: 'African Grey Parrot'
});

module.exports = Animal;