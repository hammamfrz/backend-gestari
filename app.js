const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const userRouter = require('./app/user/route');
const katalogRouter = require('./app/katalog/route');
const journeyRouter = require('./app/journey/route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/katalog', katalogRouter);
app.use('/journey', journeyRouter);

module.exports = app;
