var express = require('express');
var app = module.exports = express();

var controllers = require(__dirname+'/controllers');


app.get('/api/v01/users', controllers.list);
app.post('/api/v01/users', controllers.create);
app.get('/api/v01/users/:id', controllers.get);
