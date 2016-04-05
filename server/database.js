var mongoose = require('mongoose');

// setup database
mongoose.connect('mongodb://localhost/animals');

// create the connection and run some status' on whether the connection was created or not
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!');
});

module.exports = db;