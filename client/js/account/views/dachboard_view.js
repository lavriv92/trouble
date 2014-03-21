define([
  'jquery',
  'underscore',
  'backbone',
  'core/views/map_view',
  'text!account/templates/dachboard.html',
  'account/views/user_panel',
], function(
    $, 
    _, 
    Backbone, 
    MapView,
    dachboard_template,
    UserPanel
) {
  var DachbordView = Backbone.View.extend({
    el: '#content',
    template: _.template(dachboard_template),

    initialize: function () {
      return this;
    },

    render: function () {
      this.$el.html(this.template());
      var map = new MapView({el: '#map'});
      var user_panel = new UserPanel;
      return this;
    }
  });

  return DachbordView;
});
