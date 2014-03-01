define([
  'backbone',
  'core/views/app_view',
  'core/views/index_view'
], function(Backbone, AppView, IndexView) {
  var CoreRouter = Backbone.Router.extend({
    routes: {
        "": "index"
    },

    initialize: function() {
        var app_view = new AppView;
    },

    index: function (){
        var index_view = new IndexView;
        index_view.render();
    }
  });

  return CoreRouter;
});
