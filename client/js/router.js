define([
  'backbone',
  'core/router',
  'account/router',
  'views/PostDetailView',
  'views/DacboardView'
], function(
    Backbone, 
    CoreRouter, 
    AccountRouter
) {
  var initialize = function(){
    var core_router = new CoreRouter;
    var account_router = new AccountRouter;
    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});
