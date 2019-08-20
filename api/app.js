var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
//var csurf = require('csurf');
var logger = require('morgan');
var cors = require("cors");
//var expressValidator = require('express-validator');
//var session = require('express-session');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var express = require('express');
//var expressCurl = require('express-curl');

var indexRouter = require('./routes/index');

//var csrfProtection = csurf({ cookie: true });
//var parseForm = bodyParser.urlencoded({ extended: false });

var app = express();

//app.use(expressCurl);
app.use(logger('dev'));
app.use(helmet());
app.disable('x-powered-by');
app.use('*',cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(expressValidator());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error:err.message});
});

module.exports = app;
