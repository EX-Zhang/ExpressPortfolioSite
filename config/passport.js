
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');

var User = mongoose.model("User");

passport.use(new LocalStrategy((username, password, done) => {

  User.findOne({ username: username, password: password }, (err, user) => {

    if (user === null) {

      return done(null, false, { message: "Invalid Username or Password" });

    }

    return done(null, user);

  });

}));

passport.serializeUser(function (user, done) {

  done(null, user._id.toString());

});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.authenticateMiddleware = function authenticationMiddleware() {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
};

module.exports = passport;
