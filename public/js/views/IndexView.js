define([
    'jquery',
    'underscore',
    'backbone',
    'views/PostView',
    'views/SearchView',
    'views/MapView',
    'text!templates/index.html'
], function($, _, Backbone, PostView, SearchView, MapView, IndexTemplate){
    var IndexView = Backbone.View.extend({
	el: '#content',
	
	initialize: function(){
	    this.render();
	},

	render: function(){
	    var self = this;
	    $(this.el).html(_.template(IndexTemplate));
	    var map_view = new MapView({el: '#map'});
	    var post_view = new PostView();
	    var search_view = new SearchView();
	}
    });

    return IndexView;
});