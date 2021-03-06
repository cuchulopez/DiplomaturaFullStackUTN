var createError = require('http-errors');
var express = require('express');
var sessions = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');
var cors = require('cors');

require('dotenv').config();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var serviciosRouter = require('./routes/servicios');
var preciosRouter = require('./routes/precios');
var imagenesRouter = require('./routes/imagenes');
var adminRouter = require('./routes/admin/admin');
var serviciosAdminRouter = require('./routes/admin/servicios');
var imagenesAdminRouter = require('./routes/admin/imagenes');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(sessions({
  secret: 'DiplomaturaFullStackUTN',
  resave: false,
  saveUninitialized: true
}));

privada = async (req, res, next) => {
  try{
    if(req.session.id_usr){
      next();
    } else {
      res.redirect('/login');
    }
  }catch(e){
    console.log(e);
  }
};

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/', indexRouter);
app.use('/servicios', serviciosRouter);
app.use('/imagenes', imagenesRouter);
app.use('/precios', preciosRouter);
app.use('/admin/admin', privada, adminRouter);
app.use('/admin/servicios', privada, serviciosAdminRouter);
app.use('/admin/imagenes', privada, imagenesAdminRouter);
app.use('/login', loginRouter);

app.use('/api', cors(), apiRouter);

app.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/');
});

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

module.exports = app;
