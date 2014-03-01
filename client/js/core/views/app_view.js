define([
    'backbone'
], function(Backbone) {
    var AppView = Backbone.View.extend({
        el: '#main',
        initialize: function () {
            console.log('app render');
            return this;
        }
    });

    return AppView;
});
