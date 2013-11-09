define([
    'jquery',
    'underscore',
    'backbone',
    'http://api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.js'
], function($, _, Backbone, OpenLayers, map_utils) {
    var MapView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },

        render: function() {
           var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
               .setView([49.8443985, 24.0254002], 17);
        }
    });

    return MapView;
});
