define([
  'jquery',
  'underscore',
  'backbone',
  'core/views/map_view',
  'collections/Users',
  'text!account/templates/register.html'
], function ($, _, Backbone, MapView, Users, register_template){
  var RegisterView = Backbone.View.extend({
    el: '#content',
    collection: new Users(),
    template: _.template(register_template),

    events: {
      'click #register': 'handleRegister',
      'click .fb-register': 'handleFacebookRegister',
      'click .tw-register': 'handleTwitterRegister'
    },

    initialize: function (){
      this.render();
    },

    render: function (){
      this.$el.html(this.template);
      var map_view = new MapView({el: '#map'});
      return this;
    },

    handleRegister: function (){
      var username = $('#re-username').val();
      var password = $('#re-password').val();
      var email = $('#re-email').val();
      console.log(username);
      var user = new User({
        username: username,
        password: password,
        email: email
      });
      user.save({
        success: function () {
          alert('success');
        },
        error: function () {
		    	alert('error');
        }
      });
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
