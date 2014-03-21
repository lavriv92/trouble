define([
  'jquery',
  'underscore',
  'backbone',
  'text!account/templates/user_panel.html',
  'account/models/current_user'
], function(
  $,
  _,
  Backbone,
  userPanel,
  CurrentUser
) {

  var UserPanel = Backbone.View.extend({

    el: '.user-info',
    model: new CurrentUser(),
    template: userPanel,

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.fetch();
      return this;
    },

    render: function() {
      console.log(this.model.toJSON());
      var context = {'user': this.model.toJSON()};
      var template = _.template(this.template, context);
      this.$el.html(template);
      return this;
    }
  });

  return UserPanel;
});
