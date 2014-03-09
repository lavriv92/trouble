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
    }
  });

  return User;
});
