var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	email: {
		type: String
	},
	password: {
		type: String,
		required: true
	},
  facebook_id: String,
  picture_url: String
},{
  collection: 'user'
});

var postSchema = new Schema({
  _author: {type: Number, ref: 'User' },
  content: String,
  date: Date,
});

var userFacebookTokenSchema = new Schema({
  _token: String,
  user_id: String,
  facebook_id: String
});

exports.User = mongoose.model('User', userSchema);
exports.Post = mongoose.model('Post', postSchema);
exports.FacebookToken = mongoose.model(
  'FacebookToken', 
  userFacebookTokenSchema
);