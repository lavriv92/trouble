var express = require('express');
var controllers = require(__dirname + '/controllers');

var app = module.exports = express();

app.post('/api/v01/login', controllers.login);
app.all('/api/v01/logout', controllers.logout);
