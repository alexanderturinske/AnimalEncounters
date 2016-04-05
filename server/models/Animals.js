var mongoose = require('mongoose');

// create database schema
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

// create model to make instances
var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;