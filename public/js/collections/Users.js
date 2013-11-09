define([
    'jquery',
    'underscore',
    'backbone',
    'models/User'
], function($, _, Backbone, User){
    var Users = Backbone.Collection.extend({
	url: '/users',
	model: User,
	save: function (){
	    $.post(this.url, this.toJSON());
	}
    });

    return Users;
});