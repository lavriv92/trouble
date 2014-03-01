define([
  'jquery',
  'underscore',
  'backbone',
  'core/views/map_view',
  'text!core/templates/index.html'
], function(
    $,
    _, 
    Backbone, 
    MapView, 
    index_template
){
  var IndexView = Backbone.View.extend({
    el: '#content',
    template: _.template(index_template),

    initialize: function(){
      this.render();
    },

    render: function(){
      var self = this;
      this.$el.html(this.template);
      var map_view = new MapView({el: '#map'});
    }
  });

  return IndexView;
});
