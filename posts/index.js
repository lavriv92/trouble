var express = require('express');
var controllers = require(__dirname + '/controllers');

var app = module.exports = express();

app.get('/api/v01/posts', controllers.list);
app.get('/api/v01/posts/:id', controllers.get);
app.post('/api/v01/posts', controllers.create);
app.delete('/api/v01/posts/:id', controllers.del);
