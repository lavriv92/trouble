var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

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
},{
    collection: 'user'
});

var postSchema = new Schema({
    _author: {type: Number, ref: 'User' },
    content: String,
    date: Date,
});

exports.User = mongoose.model('User', userSchema);
exports.Post = mongoose.model('Post', postSchema);
