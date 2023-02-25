
// contact.server.model.js, Erxun Zhang, 301331403, 2023-2-21

var mongoose = require("mongoose");

var ContactSchema = new mongoose.Schema({ // Contact Schema

  name: String,

  number: String,

  email: String,

});

mongoose.model("Contact", ContactSchema, "Contact"); // Contact Model
