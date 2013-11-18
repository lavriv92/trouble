define([
  'jquery',
  'underscore',
  'backbone',
  'models/Post'    
  ], function($, _, Backbone, Post) {
  var Posts = Backbone.Collection.extend({
    url: '/users',
    model: Post
  });

  return Posts;
});