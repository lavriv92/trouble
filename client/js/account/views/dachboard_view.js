define([
  'jquery',
  'underscore',
  'backbone',
  'core/views/map_view',
  'account/models/current_user',
  'text!account/templates/dachboard.html'
], function(
    $, 
    _, 
    Backbone, 
    MapView,
    CurrentUser,
    dachboard_template
) {
  var DachbordView = Backbone.View.extend({
    el: '#content',
    template: _.template(dachboard_template),

    model: new CurrentUser(),

    initialize: function () {
      this.model.fetch();
      return this;
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      var map = new MapView({el: '#map'});
      return this;
    }
  });

  return DachbordView;
});
