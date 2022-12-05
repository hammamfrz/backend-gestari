const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const userRouter = require('./app/user/route');
const katalogRouter = require('./app/katalog/route');
const journeyRouter = require('./app/journey/route');
const transactionRouter = require('./app/transaction/route')
const orderRouter = require('./app/order/route')
const corsMiddleware = require('./middleware/cors');
const router = require('./routes');

const app = express();

app.use(corsMiddleware);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.use('/user', userRouter);
app.use('/katalog', katalogRouter);
app.use('/journey', journeyRouter);
app.use('/transaction', transactionRouter);
app.use('/order', orderRouter);

module.exports = app;
