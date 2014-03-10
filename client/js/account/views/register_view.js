define([
  'jquery',
  'underscore',
  'backbone',
  'core/views/map_view',
  'account/models/user',
  'text!account/templates/register.html'
], function (
    $,
    _, 
    Backbone, 
    MapView,
    User,
    register_template
){
  var RegisterView = Backbone.View.extend({
    el: '#content',
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

       var user = new User({
         'username': username,
         'password': password,
         'email': email
       });

       console.log(user);

       user.save(function(data) {
         console.log(data)
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
