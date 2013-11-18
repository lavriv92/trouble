define([
  'jquery',
  'underscore',
  'backbone',
  'views/IndexView',
  'views/PostDetailView',
  'views/LoginView',
  'views/RegisterView',
  'views/DacboardView'
], function($, _, Backbone, IndexView, 
  PostDetailView, LoginView, RegisterView,
  DachbordView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "index",
      "!/detail/:id": "showDetail",
      "!/login": "showLogin",
      "!/register": "showRegister",
      "!/dachboard": "showDachboard"
    },

    index: function () {
      var view = new IndexView();
    },

    showDetail: function (id){
      console.log(id);
      var view = new PostDetailView();
    },

    showLogin: function () {
      var login = new LoginView();
    },

    showRegister: function (){
      var register = new RegisterView();
    },

    showDachboard: function () {
      var dacboard = new DachbordView();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter();
    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});