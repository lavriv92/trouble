var https = require('https');

function Facebook (authData) {
  var self = this;
  this.appId = authData.appId;
  this.appSecret = authData.appSecret;
  this.redirectUrl = authData.redirectUrl;
}

Facebook.prototype = {

  getAuthorizeURL: function () {
    var userScope = ['offline_access','create_event',
                           'publish_stream','user_events',
                           'friends_about_me'];

    var url = 'https://graph.facebook.com/oauth/authorize' +
              '?client_id=' + this.appId +
              '&scope=' + userScope.join(',') +
              '&redirect_uri=' + this.redirectUrl +
              '&response_type=code' +
              '&state=0';
    return url;
  },

  getTokenData: function (generatedCode, callback) {

    /*
      @callback must be a function
    */

    var url = 'https://graph.facebook.com/oauth/access_token' +
              '?client_id=' + this.appId +
              '&redirect_uri=' + this.redirectUrl +
              '&client_secret=' + this.appSecret +
              '&code=' + generatedCode;

    var query = https.get(url, function (res) {
      res.on('data', function (data) {
        var token = data.toString('utf-8').split('&')[0].split('=')[1];
        callback(token);
      });
    });
    query.end();
  },

  getUserDetails: function (accessToken, callback) {
    /*
      @ access_token is required
    */
    var url = "https://graph.facebook.com/me?access_token=" + accessToken;
    var query = https.get(url, function (res) {
      res.on('data', function (data) {
        var userData = JSON.parse(data.toString('utf-8'));
        callback(userData);
      });
    });
  }
};

function Twitter (authData) {
  //--
}

Twitter.prototype = {

  authDialog: function () {
    // body
  },

  getAccessToken: function () {
    // body...
  }
};

exports.Facebook = Facebook;
exports.Twitter = Twitter;