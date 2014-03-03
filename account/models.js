var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "username": {
    "type": String,
    "required": true,
    "unique": true
  },

  "email": {
    "type": String,
    "required": true,
    "unique": true
  },

  "password": {
    "type": String,
    "required": true
  },

  "facebook_id": {
    "type": String
  },

  "picture_url": {
    "type": String
  }
},{
  "collection": "users"
});

exports.User = mongoose.model('User', userSchema);

