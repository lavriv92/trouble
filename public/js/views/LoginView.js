define([
    'jquery',
    'underscore',
    'backbone',
    'views/MapView',
    'views/FlashView',
    'text!templates/login.html'
], function($, _, Backbone, MapView, FlashMessageView, LoginTemplate){
    var LoginView = Backbone.View.extend({
	el: '#content',

	events: {
	    "click .submit": "handleLogin",
	    "click .fb-auth": "handleFacebookLogin",
	    "click .tw-auth": "handleTwitterLogin"
	},

	initialize: function (){
	    this.render();
	},

	render: function (){
	    $(this.el).html(_.template(LoginTemplate));
	    var map = new MapView({el: '#map'});
	},

	handleLogin: function(e){
	    e.preventDefault();
	    var username = $('#username').val();
	    var password = $('#password').val();
	    
	    $.ajax({
		url: '/login',
		type: 'POST',
 		data: {
		    username: username,
		    password: password
		},
		
		success: function (){
		    window.location.href = '/';
		},

		error: function (){
		    var message_view = new FlashMessageView();
		}
	    });
	},

	handleFacebookLogin: function(){
	    $.ajax({
		url: '/facebook_login',
		type: 'POST',
		data: {},
		success: function (){
		    alert('success');		
		},
		error: function (){
		    alert('error');
		}
	    });
	},

	handleTwitterLogin: function(){
	    alert('twitter');
	},

	validate: function (){
	    return true;
	}
    });
    
    return LoginView;
});