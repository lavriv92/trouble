require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'underscore': '../bower_components/underscore/underscore',
    'backbone': '../bower_components/backbone/backbone',
    'text': '../bower_components/requirejs-text/text'
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
    },
    'text': {
      'deps': [],
      'exports': 'text'
    }
  }
});

require([
  'app',
], function(App){
  App.initialize();		
});
