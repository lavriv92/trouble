define([
  'backbone'      
], function(Backbone) {
  var User = Backbone.Model.extend({
    urlRoot: '/api/v01/users',
    idAttribute: '_id',

    defaults: {
      username: "",
      email: "",
      password: "",
    },

    validate: function(attrs) {
      if(!attrs.username) {
        this.on('invalid', function(error) { 
          console.log(error);
        })
      }
    }
  });

  return User;
});
