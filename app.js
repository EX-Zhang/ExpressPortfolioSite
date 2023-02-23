var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');

var aboutRouter = require('./routes/about');

var usersRouter = require('./routes/users');

var app = express();

// Connect MongoDB

var mongoose = require('./config/mongoose.js');

var db = mongoose();

// Passport

var passport = require('passport');

var session = require('express-session');

app.use(cookieParser());
app.use(session({ secret: "need change" }));
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);

app.use('/home', homeRouter);

app.use('/about', aboutRouter);

app.use('/projects', require('./routes/projects'));

app.use('/services', require('./routes/services'));

app.use('/contact', require('./routes/contact'));

app.use('/login', require('./routes/login'));

app.use('/businesscontacts', require('./routes/businesscontacts'));

app.use('/update', require('./routes/update'));

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
