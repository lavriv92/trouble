define([
    'jquery',
    'underscore',
    'backbone',
    'views/MapView',
    'models/User',
    'collections/Users',
    'text!templates/register.html'
], function ($, _, Backbone, MapView, User, Users, registerTemplate){
    var RegisterView = Backbone.View.extend({
	el: '#content',

	collection: new Users(),

	events: {
	    'click #register': 'handleRegister',
	    'click .fb-register': 'handleFacebookRegister',
	    'click .tw-register': 'handleTwitterRegister'
	},

	initialize: function (){
	    this.render();
	},

	render: function (){
	    $(this.el).html(_.template(registerTemplate));
	    var map_view = new MapView({el: '#map'});
	    return this;
	},

	handleRegister: function (){
	    var username = $('#re-username').val();
	    var password = $('#re-password').val();
	    var email = $('#re-email').val();
	    console.log(email);
	    var user = new User({
		username: username,
		password: password,
		email: email
	    });

	    user.save({
		wait: true,
		success: function () {
		    alert('success');
		},
		error: function () {
		    alert('error');
		}
	    })
	},

	handleFacebookRegister: function (){
	    alert('facebook register');
	},

	handleTwitterRegister: function(){
	    alert('twitter register');
	}
    });
    
    return RegisterView;
});