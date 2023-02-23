var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var User = mongoose.model("User");

var passport = require('../config/passport.js');

router.get('/', function (req, res, next) {

  res.render('login', { title: "Home" });

});

router.post('/check-user', passport.authenticate('local'), function (req, res, next) {

  res.json({ message: "success", });

});

module.exports = router;
