define([
    'backbone',
    'core/views/header_view'
], function(
  Backbone,
  HeaderView  
) {
    var AppView = Backbone.View.extend({
      el: '#main',
      initialize: function () {
        var header_view = new HeaderView;
        header_view.render();
        return this;
      },

      render: function() {
        return this;
      },
    });

    return AppView;
});
