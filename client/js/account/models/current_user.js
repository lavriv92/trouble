define([
  'backbone'        
], function(Backbone) {
  var CurrentUser = Backbone.Model.extend({
    urlRoot: function() {
      return '/api/v01/current';
    },

    idAttribute: '_id',

    save: function () {}
  });

  return CurrentUser;
});
