define([
  'backbone'     
], function(Backbone) {
  var PostsRouter = Backbone.Router.extend({
    
    routes: {
      'posts': 'posts'
    },

    posts: function() {
      console.log('render_posts');
    }
  });

  return PostsRouter;
});
