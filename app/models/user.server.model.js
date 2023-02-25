
// user.server.model.js, Erxun Zhang, 301331403, 2023-2-21

var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({ // User Schema

  username: String,

  password: String,

});

mongoose.model("User", UserSchema, "User"); // User Model
