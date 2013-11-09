var crypto = require('crypto');
var User= require(__dirname + '/models').User;

cryptPassword = function (password) {
    return crypto('md5').update(password).digest('hex');
};

exports.getUsers = function (req, res) {
    User.find(function(err, users){
	res.json(users);
    });
};

exports.saveUser = function (req, res) {
    var user = new User(req.body);
    //var password = cryptPassword(req.body.password);
    //console.log(password);
    user.save(function(err){
	if(!err){
	    res.json({'message': 'success'});
	} else {
	    res.json({'message': 'error'});
	}
    });
};

exports.getUserDetails = function (req, res) {
    User.findOne({_id: req.params.id}, function (err, user){
	if(!err){
	    res.json(user);
	} else {
	    res.json({message: error});
	}
    });
};

exports.deleteUser = function (req, res) {
};

exports.logIn = function (req, res) {
    var password = cryptPassword(req.body.password);

    User.findOne({username:req.body.username}, function(err, user) {
	if(!err) {
	    req.session.username = user.username;
	    res.redirect('/');
	} else {
	    response.send(404);
	}
    });
};

exports.logOut = function (req, res) {
    if(req.session.username != undefined) {
	delete session.username;
    } 
    res.redirect('/')
};