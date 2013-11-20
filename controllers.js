var crypto = require('crypto');
var User = require(__dirname + '/models').User;
var social = require(__dirname + '/social');
var config = require(__dirname + '/config').config;

function cryptPassword (password) {
  if(password !== undefined) {
    return crypto.createHash('md5').update(password).digest('hex');
  }
  return null;
};

exports.getUsers = function (req, res) {
  User.find({}, function(err, users) { 
    if(!err) { 
      res.json(users);
    } else {
      res.json(err);
    }
  });
};

exports.saveUser = function (req, res) {
  req.body.password = cryptPassword(req.body.password);
  var user = new User(req.body);
  user.save(function(err) {
    if(!err) {
      res.send(200);
    } else {
      res.json(err);
    }
  });
};

exports.getUserDetails = function (req, res) {
  User.findOne({_id: req.params.id}, function (err, user) {
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

exports.getPosts = function (req, res) {
  Post.find({}, function (err, posts) {
    if(!err) {
      re.json(posts);
    } else {
      res.json(err);
    }
  });
};

//------------------------------------------------------------------------------

exports.logIn = function (req, res) {
  var password = cryptPassword(req.body.password);
  User.findOne({username:req.body.username}, function(err, user) {
    if(!err) {
      req.session.id = user.id;
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

exports.facebookLogin = function (req, res) {
   var f = new social.Facebook({
    appId: config.facebook.appId,
    appSecret: config.facebook.appSecret,
    redirectUrl: config.facebook.redirectUrl
  });
  var url = f.getAuthorizeURL();
  delete f;
  res.redirect(url);
};

exports.getFacebookFriends = function (req, res) {
  var access_token = req.session.access_token;
  console.log(access_token);
};

exports.handleFacebookCode = function (req, res) {
  var f = new social.Facebook({
    appId: config.facebook.appId,
    appSecret: config.facebook.appSecret,
    redirectUrl: config.facebook.redirectUrl
  });

  if (req.query.code !== undefined) {
    f.getTokenData(req.query.code, function (token) {
      req.session.token = token;
      f.getUserDetails(token, function (user) {
        var new_user = new User({
          username: user.username,
          password: 'q',
          email: user.email,
          facebook_id: user.id,
          picture_url: 'https://graph.facebook.com/' + user.id + '/picture?type=square'
        });

        new_user.save(function (err) {
          if(err) {
            console.log(err);
          };
        });
      });
    });
  }
  res.redirect('/#');
};