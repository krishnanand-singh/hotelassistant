var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var db = require('./models/db');
var location = require('./models/location');
var registeredService = require('./models/registeredService');
var booking = require('./models/booking');
<<<<<<< HEAD
var food = require('./models/food');
=======
var foodOrder = require('./models/foodOrder');


>>>>>>> origin/master
var index = require('./routes/index');
var hook = require('./routes/hook');
var bookingRoute = require('./routes/booking');
var registeredServiceRoute = require('./routes/registeredService');
<<<<<<< HEAD
=======
var foodOrderRoute = require('./routes/foodOrder');

>>>>>>> origin/master
var app = express();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/api/', index);
app.use('/api/booking', bookingRoute);
app.use('/api/registeredService', registeredServiceRoute);
app.use('/api/foodOrder', foodOrderRoute);
app.use('/webhook', hook);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err);
    res.status(err.status || 500);
    res.json(err);
});
module.exports = app;