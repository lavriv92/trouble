define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/search.html'
], function ($, _, Backbone, serachTemplate) {
  var SearchView = Backbone.View.extend({
    el: "#search",
    events: {
      "click #do-search": "doSearch"
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      $(this.el).html(_.template(serachTemplate))
    },

    doSearch: function () {
      var value = $('#search-q').val();
      console.log(value);
    }
  });

  return SearchView;
});