const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');
const config = require('./config/database');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const port = process.env.PORT || 1000;
const crypto = require('crypto').randomBytes(256).toString('hex');

mongoose.connect(config.uri, {
    useMongoClient: true,
}, (err) => {
    // Check if database was able to connect
    if (err) {
        console.log('Database connection failed: ', err); // Return error message
    } else {
        console.log('Connected to ', config.db); // Return success message
    }
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


require('./config/passport')(passport); // pass passport for configuration


// required for passport
app.use(session({ secret: crypto })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
    console.log('Listening on port ' + port + ' in ' + process.env.NODE_ENV + ' mode');
});


module.exports = app;