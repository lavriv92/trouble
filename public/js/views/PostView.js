define([
    'jquery',
    'underscore',
    'backbone',
    'collections/Posts',
    'text!templates/posts.html'
], function($, _, Backbone, Posts, PostTemplate){
    var PostView = Backbone.View.extend({
        el: "#posts",

        collection: new Posts(),

        initialize: function(){
            this.render();
        },

        render: function(){
            var self = this;
            $(self.el).html("<div id=\"preloader\"><img src=\"/img/preloader.gif\" /></div>");
            this.collection.fetch({
                success: function(posts){
                    $(self.el).html(_.template(PostTemplate, {_:_, posts: posts.models}))
                }
            });
         }
        
    });

    return PostView;
});