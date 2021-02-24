const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to MongoDB!'));

// --------------Index routes--------------

app.use('/', indexRouter);
app.use('/users', usersRouter);

//-------------API Routes--------------

const eventRouter = require('./routes/EventRoute');
app.use('/api/eventdata', eventRouter);

const memberRouter = require('./routes/MemberRoute');
app.use('/api/memberdata', memberRouter);

const noticeRouter = require('./routes/NoticeRouter');
app.use('/api/noticedata', noticeRouter);

const resourceRouter = require('./routes/ResourceRouter');
app.use('/api/resourcedata', resourceRouter);

const conferenceRouter = require('./routes/conferenceRouter');
app.use('/api/conferencedata', conferenceRouter);

const galleryRouter = require('./routes/GalleryRoute');
app.use('/api/gallerydata',galleryRouter);

//-------------------------------------

//-----------------Upload Routes--------------------

const imageRouter = require('./routes/data/ImageRouter');
app.use('/upload/image', imageRouter);

const pdfRouter = require('./routes/data/PdfRouter');
app.use('/upload/pdf', pdfRouter);

//--------------------------------------------------

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
