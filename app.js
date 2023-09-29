const express = require('express');
const morgan = require('morgan');
const app = express();
const offerRouter = require('./routes/offersRoute');

const customerRouter = require('./routes/customerRoute');

const orderRouter = require('./routes/orderRoute');

const adminRoute = require('./routes/adminRoute');
const imageUploadRoute = require('./routes/imageUploadRoute');


// create middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin (*), or you can specify specific origins.
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
///-------------///
//to access the body req
app.use(express.json());
//third party middleware // helps you to see data inside the req
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/customers', customerRouter);

app.use('/api/v1/offers', offerRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/admin', adminRoute);

// app.use('/api/v1/', imageUploadRoute);
module.exports = app;
