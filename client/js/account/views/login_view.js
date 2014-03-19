define([
  'jquery',
  'underscore',
  'backbone',
  'core/views/map_view',
  'text!account/templates/login.html'
], function($, _, Backbone, MapView, login_template){
  var LoginView = Backbone.View.extend({
     el: '#content',
     tagName: 'div',
     className: 'test',
     template: _.template(login_template),

	  events: {
	   "click .submit": "handleLogin",
	   "click .tw-auth": "handleTwitterLogin"
      },

	  initialize: function (){
	    return this;
	  },

	  render: function (){
	    this.$el.html(this.template);
	    var map = new MapView({el: '#map'});
        return this;
	  },

	  handleLogin: function(e){
	    e.preventDefault();
	    var username = $('#username').val();
	    var password = $('#password').val();
	    
	    $.ajax({
			 url: '/api/v01/login',
			 type: 'POST',
	 		  data: {
			   username: username,
			   password: password
			  },
			
			  success: function (){
			    window.location.href = '/#/account/dachboard';
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
