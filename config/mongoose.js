
// Connect MongoDB
var mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost:27017/ExpressPortfolio';

module.exports = function () {

  var db = mongoose.connect(mongoDB);

  require('../app/models/user.server.model.js');

  require('../app/models/contact.server.model.js');

  return db;

}
