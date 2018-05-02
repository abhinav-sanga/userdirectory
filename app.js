var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var mongoose = require('mongoose');

var index = require('./routes/index');

var app = express();


mongoose.connect('mongodb://abhi0515:abhinav05@ds257838.mlab.com:57838/smartbeings');
//mongoose.connect('mongodb://127.0.0.1:27017/smartbeings');
var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
    console.log('connection successfull');
});


// view engine setup
app.engine('.hbs', hbs({defaultLayout: 'layout', extname:'.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var http = require('http');
setInterval(function() {
    //http.get("http://starktech05.herokuapp.com");
    console.log("executed");
}, 3000000); // every 50 minutes (3000000)

module.exports = app;
