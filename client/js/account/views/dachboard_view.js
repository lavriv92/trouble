define([
  'jquery',
  'underscore',
  'backbone',
  'core/views/map_view',
  'account/models/user',
  'account/models/current_user',
  'text!account/templates/dachboard.html'
], function(
    $, 
    _, 
    Backbone, 
    MapView,
    User,
    CurrentUser,
    dachboard_template
) {
  var DachbordView = Backbone.View.extend({
    el: '#content',
    template: _.template(dachboard_template),

    model: new CurrentUser(),

    initialize: function () {
      this.model.fetch();
      console.log(this.model.attributes);
      return this;
    },

    render: function () {
      this.$el.html(this.template);
      var map = new MapView({el: '#map'});
      return this;
    }
  });

  return DachbordView;
});
