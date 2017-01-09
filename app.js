var express = require('express');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var cors = require('cors');
var logger = require('morgan');
var fs = require('fs');

var app = express();

app.use(cors());
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
