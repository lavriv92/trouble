define([
    'backbone'
], function(Backbone) {
    var AppView = Backbone.View.extend({
        el: '#main',
        initialize: function () {
            console.log(this.$el);
            return this;
        }
    });

    return AppView;
});
