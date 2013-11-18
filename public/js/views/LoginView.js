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

	  handleTwitterLogin: function(){
	    alert('twitter');
	  },

	  validate: function (){
	    return true;
	  }
  });
    
  return LoginView;
});