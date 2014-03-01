define([
  'backbone',
  'account/views/login_view',
  'account/views/register_view',
], function(Backbone, LoginView, RegisterView) {
  var AccountRouter = Backbone.Router.extend({
    routes: {
      'account/login': 'login',
      'account/register': 'register'
    },

    login: function (){
      var login_view = new LoginView;
      login_view.render();
    },

    register: function (){
      var register_view = new RegisterView;
      register_view.render();
    }
  });

  return AccountRouter;
});
