const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

const pageRouter = require('./routes/page.route');
const userRouter = require('./routes/user.route');
const devRouter = require('./routes/user.route');

console.log("App is running in '" + process.env['NODE_ENV'] + "' mode.")
if (process.env['NODE_ENV'] == "test") {
  app.locals.appUrl = "http://localhost";
}
else if (process.env['NODE_ENV'] == "production") {
  app.locals.appUrl = "https://production-site.com";
}
console.log("URL is >>> " + app.locals.appUrl);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.set('trust proxy', false);
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB connection is set.')
});

app.use('/', pageRouter);
app.use('/user', userRouter);
app.use('/dev', devRouter);

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
