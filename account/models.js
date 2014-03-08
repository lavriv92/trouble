var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  'username': {'type': String, 
    'required': true, 
    'unique': true 
  },

  'email': {
    'type': String,
    'required': true,
    'unique': true
  },

  'password': {
    'type': String,
    'required': true
  },

  'facebook_id': {
    'type': String
  },

  'picture_url': {
    'type': String
  }

},{
  'collection': 'users'
});

userSchema.methods = {
    cryptPassword: function(password) {
        return crypto.createHash('sha256').
            update(password).digest('base64');
    },

    authenticated: function(password) {
        return this.cryptPassword(password) === this.password;
    }
}

exports.User = mongoose.model('User', userSchema);
