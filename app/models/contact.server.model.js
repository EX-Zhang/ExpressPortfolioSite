
var mongoose = require("mongoose");

var ContactSchema = new mongoose.Schema({

  name: String,

  number: String,

  email: String,

});

mongoose.model("Contact", ContactSchema, "Contact");
