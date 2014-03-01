define([
  'jquery',
  'underscore',
  'backbone',
  'core/views/map_view',
  'collections/Posts',
  'text!account/templates/dachboard.html'
], function(
    $, 
    _, 
    Backbone, 
    MapView, 
    Posts, 
    dachboard_template
) {
  var DachbordView = Backbone.View.extend({
    el: '#content',
    template: _.template(dachboard_template),
    
    collection: new Posts(),

    initialize: function () {
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
