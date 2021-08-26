const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

var { mongoose } = require('./configuration/db/mongoose');

const messagesRouter = require('./routes/messages');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/messages', require('./routes/messages'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.redirect('/');
});

module.exports = app;
