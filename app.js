var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 4000;
//session
var session = require('express-session');

//Import routes
var { getHomePage } = require('./routes/index');
var { getDashboard, logout } = require('./routes/dashboard');
var usersRouter = require('./routes/users');
var { getLogin, postLogin } = require('./routes/login');


var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 } //cookie 1 jam satuan ms
}))

app.set('port', process.env.port || port); 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Register Routes
app.get('/', getHomePage);
app.use('/users', usersRouter);
app.get('/login', getLogin);
app.post('/login', postLogin);
app.get('/dashboard', getDashboard);
app.post('/logout',logout);

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
  res.render('error');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;
