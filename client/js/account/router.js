define([
  'backbone',
  'account/views/login_view',
  'account/views/register_view',
  'account/views/dachboard_view',
  'account/models/current_user'
], function(
    Backbone, 
    LoginView, 
    RegisterView,
    DachboardView,
    CurrentUser
) {
  var AccountRouter = Backbone.Router.extend({
    routes: {
      'account/login': 'login',
      'account/register': 'register',
      'account/dachboard': 'dachboard'
    },

    login: function (){
      var login_view = new LoginView;
      login_view.render();
    },

    register: function (){
      var register_view = new RegisterView;
      register_view.render();
    },

    dachboard: function() {
        var dachboard_view = new DachboardView;
        dachboard_view.render();
    }
  });

  return AccountRouter;
});
