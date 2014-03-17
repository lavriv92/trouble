var models = require(__dirname + '/../account/models');


exports.login = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  models.User.findOne({username: username}, function(err, user) {
    if(!err) {
      var authenticated = user.authenticate(password);

      if(authenticated) {
        if(!req.session.user_id) req.session.user_id = user._id;
        res.send(200);
      } else {
        res.send(401);
      }
    } else {
      res.json(404, err);
    }
  });
};

exports.current  = function(req, res) {
  var session_id = req.session.user_id;

  models.User.findOne({_id: session_id}, function(err, user) {
    if(!err) {
      res.send(403);
    } else {
      res.json(user);
    }
  });
};


exports.logout = function(req, res) {
  if(req.session.user_id) delete req.session.user_id;
  res.send(200);
};
