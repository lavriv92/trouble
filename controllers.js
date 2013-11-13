var crypto = require('crypto');
var User= require(__dirname + '/models').User;

var cryptPassword = function (password) {
    if(password !== undefined)
	return crypto.createHash('md5').update(password).digest('hex');
    return null;
};

exports.getUsers = function (req, res) {
    User.find({}, function(err, users) { 
	if(!err) { 
	    res.json(users)
	} else {
	    res.json(err);
	}
    });
};

exports.saveUser = function (req, res) {
    var user = new User(req.body);
    user.password = cryptPassword(req.body.password);
    user.save(function(err) {
	if(!err) {
	    res.send(200)
	} else {
	    res.send(500);
	}
    });
};

exports.getUserDetails = function (req, res) {
    User.findOne({_id: req.params.id}, function (err, user){
	if(!err) {
	    res.json(user);
	} else {
	    res.send(500);
	}
    });
};

exports.updateUser = function (req, res) {
    //---
};

exports.deleteUser = function (req, res) {
    User.remove({_id: request.params.id}, function (err) {
	if(!err) { 
	    res.send(200);
	} else { 
	    res.send(500); 
	}
    });
};

//------------------------------------------------------------------------------

exports.getCategories = function (req, res) {
    Category.find({}, function (err, categories) {
	if (!err) {
	    res.json(categories);
	} else {
	    res.send(500);
	}
    });
};

exports.getCategoryDetail = function (req, res) {
    Category.findOne({_id: request.params.id}, function (err, category) {
	if(!err) {
	    res.json(category)
	} else {
	    res.send(404);
	}
    });
};

exports.saveCategory = function (req, res) {
    var category = new Category(req.body);
    category.save(function(req, res){
	if(!err) {
	    res.send(200);
	} else {
	    res.send(500);
	}
    });
};

exports.deleteCategory = function (req, res) {
    Category.remove({_id: request.params.id}, function (err) {
	if(!err) {
	    res.send(200);
	} else {
	    res.send(500);
	}
    });
};

//------------------------------------------------------------------------------

exports.logIn = function (req, res) {
    var password = cryptPassword(req.body.password);

    User.findOne({username:req.body.username}, function(err, user) {
	if(!err) {
	    req.session.id = user.username;
	    res.redirect('/');
	} else {
	    res.send(404);
	}
    });
};

exports.logOut = function (req, res) {
    if(req.session.username != undefined) { 
	delete session.username;
    } else {
	res.redirect('/');
    } 
};