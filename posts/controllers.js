var models = require(__dirname + '/models');
  
exports.list = function(req, res) {
  models.Post.find({}, function(err, posts) {
    if(!err) {
      res.json(posts);
    } else {
      res.json(err);
    }
  });
};


exports.get = function(req, res) {
  models.Post.findOne({_id: req.params.id}, function(err, post){
    if(!err) {
      res.json(post);
    } else {
      res.json(err);
    }
  }); 
};


exports.create = function(req, res) {
  var post = req.params.post();
};


exports.del = function(req, res) {
  res.send('posts delete');
};
