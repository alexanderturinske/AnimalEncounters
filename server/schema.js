var mongoose = require('mongoose');
var db = require('./database');

var animalSchema = mongoose.Schema({
  id: Number,
  name: String
});

var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;