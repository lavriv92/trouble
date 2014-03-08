var models = require(__dirname + '/models');


exports.list = function(req, res, next) {
  models.User.find(function(err, users) {
    if(!err) {
      res.json(users);
    } else {
      res.json(err);
    }
  });
};


exports.get = function(req, res, next) {
  models.User.findOne({
    _id: req.params.id
  }, function (err, user) {
    if(!err) {
      res.json(user);
    } else {
      res.json(404, err); 
    }
  });
};


exports.create = function(req, res, next) {
  var user = new models.User(req.body);

  user.save(function(err) {
    if(!err) {
      res.json(user);
    } else {
      res.json(err);
    }
  });
};
