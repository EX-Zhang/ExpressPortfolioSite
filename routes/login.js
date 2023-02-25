
// login.js, Erxun Zhang, 301331403, 2023-2-21

var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var User = mongoose.model("User");

var passport = require('../config/passport.js');

router.get('/', function (req, res, next) {

  res.render('login', { title: "Home" });

});

// Handle the request of login, check if the user is valid and authenticate the user

router.post('/check-user', passport.authenticate('local'), function (req, res, next) {

  res.json({ message: "success", });

});

module.exports = router;
