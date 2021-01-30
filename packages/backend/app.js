const express = require('express');
const router = require('./router');
const { errorHandlers } = require('./middleware');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.use(errorHandlers.sequelizeErrorHandler, errorHandlers.errorHandler);

module.exports = app;
