define([
  'jquery',
  'underscore',
  'backbone',
  'views/MapView',
  'collections/Posts',
  'text!templates/dachboard.html'
], function($, _, Backbone, MapView, Posts, dacbordTemplate) {
  var DachbordView = Backbone.View.extend({
    el: '#content',
    
    collection: new Posts(),

    initialize: function () {
      this.render();
    },

    render: function () {
      $(this.el).html(_.template(dacbordTemplate));
      var map = new MapView({el: '#map'});
    }
  });

  return DachbordView;
});