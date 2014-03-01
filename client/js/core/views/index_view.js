define([
  'jquery',
  'underscore',
  'backbone',
  'views/PostView',
  'views/SearchView',
  'views/MapView',
  'text!core/templates/index.html'
], function(
    $,
    _, 
    Backbone, 
    PostView, 
    SearchView, 
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
      var post_view = new PostView();
      var search_view = new SearchView();
    }
  });

  return IndexView;
});
