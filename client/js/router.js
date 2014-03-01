define([
  'backbone',
  'core/router',
  'account/router'
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
