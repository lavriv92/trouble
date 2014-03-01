define([
  'jquery',
  'underscore',
  'backbone',
  'models/User'
  ], function($, _, Backbone, User){
    var Users = Backbone.Collection.extend({
     url: '/users',
     model: User,
   });

    return Users;
  });