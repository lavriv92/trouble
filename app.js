var express = require('express');
var app = express();
var mongoose = require('mongoose');
var ejs = require('ejs-locals');

mongoose.connect('mongodb://localhost:27017/trouble_city');

var api = require(__dirname + '/controllers');

app.set('views', __dirname + '/views');
app.engine('ejs', ejs);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: '1234567809qwerty'}));


app.get('/', function(req, res){
    res.render('index');
});

app.get('/users', api.getUsers);
app.post('/users', api.saveUser);
app.get('/users/:id', api.getUserDetails);
app.delete('/users/:id', api.deleteUser);

app.post('/login', api.logIn);

app.listen(3000);
console.log('server run on port: 3000');