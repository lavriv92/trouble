define([
  'jquery',
  'underscore',
  'backbone',
  'core/views/map_view',
  'account/models/user',
  'text!account/templates/dachboard.html'
], function(
    $, 
    _, 
    Backbone, 
    MapView,
    User,
    dachboard_template
) {
  var DachbordView = Backbone.View.extend({
    el: '#content',
    template: _.template(dachboard_template),

    model: new User,

    initialize: function () {
      console.log(this.model);
      return this;
    },

    render: function () {
      this.$el.html(this.template);
      var map = new MapView({el: '#map'});
      return this;
    }
  });

  return DachbordView;
});
