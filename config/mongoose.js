
// mongoose.js, Erxun Zhang, 301331403, 2023-2-21

// Connect MongoDB
var mongoose = require('mongoose');

//var mongoDB = 'mongodb://localhost:27017/ExpressPortfolio';

var mongoDB = 'mongodb://mongodb-s80t:27017/ExpressPortfolio'; // Use to conect MongoDB deployed on Render

module.exports = function () {

  var db = mongoose.connect(mongoDB);

  require('../app/models/user.server.model.js');

  require('../app/models/contact.server.model.js');

  return db;

}
