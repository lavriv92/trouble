var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
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

exports.User = mongoose.model('User', userSchema);
