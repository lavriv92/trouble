define([
  'backbone'      
], function(Backbone) {
  var User = Backbone.Model.extend({
    urlRoot: '/api/v01/users'
  });

  return User;
});
