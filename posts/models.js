var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
  'title': {
    'type': String,
    'unique': true
  },
  'created': {
    'type': Date,
    'default': new Date()
  }
});

var postSchema = new mongoose.Schema({
  'content': {
    'type': String,
  },
  'author_id': {
    'type': mongoose.Schema.Types.ObjectId,
    'ref': 'User'
  },
  'created': {
    'type': Date,
    'default': new Date()
  }
});


exports.Category = mongoose.model('Category', categorySchema);
exports.Post = mongoose.model('Post', categorySchema);
