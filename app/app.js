const express = require('express');
const morgan = require('morgan');
const router = require('./src/routers');
const db = require('./src/config/db');

const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', router);

//connect DB
// db.connect(function (err) {
//     if (err) throw err;
//     console.log('Connected DB!!!');
// });

module.exports = app;
