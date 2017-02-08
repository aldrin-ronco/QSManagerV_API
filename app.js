var express = require('express');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var cors = require('cors');
var logger = require('morgan');
var fs = require('fs');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(errorhandler());

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})

app.use(logger('dev', {stream: accessLogStream}));
//require('./nomina/router/index')(app);
//require('./login/router/index')(app);
require('./manager/router/index')(app);

module.exports = app;
