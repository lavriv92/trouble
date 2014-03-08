define([
  'backbone',
  'core/router',
  'account/router',
  'posts/router'
], function(
    Backbone, 
    CoreRouter, 
    AccountRouter,
    PostsRouter
) {
  var initialize = function(){
    var core_router = new CoreRouter;
    var account_router = new AccountRouter;
    var posts_router = new PostsRouter;
    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});
