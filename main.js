var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    ejs = require('ejs-locals'),
    config = require(__dirname + '/config');
    account = require(__dirname + '/account');

mongoose.connect(config.db);

app.set('views', __dirname + '/templates');
app.engine('ejs', ejs);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/client'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: '1234567809qwerty'}));
app.use(express.favicon());

app.all('/', function(req, res) {
  res.render('index');
});

/*
  * load modules... 
 */

app.use(account);
console.log('account loading');

app.listen(3000);
console.log('server run on port: 3000');
