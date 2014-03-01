require.config({
  paths: {
    'jquery': 'libs/jquery/jquery-min',
    'underscore': 'libs/underscore/underscore-min',
    'backbone': 'libs/backbone/backbone-min',
  },

  shine: {
    'jquery': {
      'deps': [],
      'exports': '$'
    },
    'underscore': {
      'deps': [],
      'exports': '_'
    },
    'backbone': {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    }
  }
});

require([
  'app',
], function(App){
  App.initialize();		
});
