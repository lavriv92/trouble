define([
   'jquery', 
   'underscore',
   'backbone',
   'models/Post',
   'text!templates/post_detail.html'
], function ($, _, Backbone, Post, PostDetailTemplate) {
    var PostDetailView = Backbone.View.extend({
        el: "#container",
        
        model: new Post(),

        initialize: function () {
	    this.render();
        },

        render: function () {
            var self = this;
            $(this.el).html(_.template(PostDetailTemplate, {post: self.model}));
        },

        comment: function () {
            //---
        }
    });

    return PostDetailView;
});
