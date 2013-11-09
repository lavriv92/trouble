define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/message.html'
], function ($, _, Backbone, FlashTemplate){
    var FlashMessageView = Backbone.View.extend({
	el: '#messages',

	tagName: 'messages',

	authomaticClose: true,

	defaultMessages: {
	    'success': 'Success!',
	    'error': 'Sorry! An error occuret this process'
	},

	classes: {
	    'success': '.success',
	    'warning': '.warning',
	    'error': '.error',
	    'info': '.info'
	},

	events: {
	    'click': 'closeNotification'
	},

	initialize: function (){
	    this.render();
	},

	render: function (){

	    var self = this;
	    $(this.el).hide();
	    $(this.el).html(_.template(FlashTemplate, {"message": this.defaultMessages.error}));
	    $(this.el).fadeIn();

	    if(this.authomaticClose){
		setTimeout(function(){
		    self.closeNotification();
		}, 3000);
	    }
	    return this;
	},

	closeNotification: function () {
	    var self = this;
	    $(this.el).fadeOut(function(){
		self.unbind();
		$(self.el).remove('#message-container');
	    });
	}

    });
    
    return FlashMessageView;
});