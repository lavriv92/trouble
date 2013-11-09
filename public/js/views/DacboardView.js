define([
    'jquery',
    'underscore',
    'backbone',
    'views/MapView',
    'text!templates/dachboard.html'
], function($, _, Backbone, MapView, dacbordTemplate){
    var DachbordView = Backbone.View.extend({
	el: '#content',
	
	initialize: function (){
	    this.render();
	},
	
	render: function (){
	    $(this.el).html(_.template(dacbordTemplate));
	    var map = new MapView({el: '#map'});
	}
    });

    return DachbordView;
});