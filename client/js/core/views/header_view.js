define([
  'jquery',
  'underscore',
  'backbone',
  'text!core/templates/header.html'
], function(
  $,
  _,
  Backbone,
  headerTemplate
) {
  var HeaderView = Backbone.View.extend({
    el: 'header',

    template: _.template(headerTemplate),

    initialize: function() {
      return this;
    },

    render: function() {
      this.$el.html(this.template);
      return this;
    }
  });

  return HeaderView;
});
