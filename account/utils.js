var crypto = require('crypto');

exports.cryptPassword = function(passwordVal) {
  /*
   *cryptPassword {password}..
   Returns encrypted password in sha256.
   * */
   return crypto.createHash('sha256').update(passwordVal).digest('base64');
};
