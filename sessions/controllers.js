var models = require(__dirname + '/../account/models');

exports.login = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  models.User.findOne({username: username}, function(err, user) {
    if(!err) {
      var authenticated = user.authenticate(password);

      if(authenticated) {
        req.session.user_id = user._id;
        res.json(user);
      } else {
        res.send(401);
      }
    } else {
      res.send(404);
    }
  });
};


exports.logout = function(req, res) {
  if(req.session.user_id) delete req.session.user_id;
  res.send(200);
};
