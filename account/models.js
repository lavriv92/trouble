var mongoose = require('mongoose');
var utils = require(__dirname + '/utils');


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
    'required': true,
    'set': utils.cryptPassword
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
    authenticate: function(password) {
        return utils.cryptPassword(password) === this.password;
    }
};

exports.User = mongoose.model('User', userSchema);
