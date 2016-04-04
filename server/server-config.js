var express = require('express');
var bodyparser = require('body-parser');
var router = require('./router');

var app = express();

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log('App is running on port ' + port);
});

app.use('/', router);