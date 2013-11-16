var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	ejs = require('ejs-locals'),
	config = require(__dirname + '/config').config;
var api = require(__dirname + '/controllers');

mongoose.connect(config.db);

app.set('views', __dirname + '/views');
app.engine('ejs', ejs);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: '1234567809qwerty'}));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/users', api.getUsers);
app.post('/users', api.saveUser);
app.get('/users/:id', api.getUserDetails);
app.delete('/users/:id', api.deleteUser);

app.post('/login', api.logIn);

app.listen(3000);
console.log('server run on port: 3000');