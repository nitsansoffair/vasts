const express = require('express');
require('./models/vasts');
const vastRouter = require('./routes/vasts');

const app = express();

app.use(express.json());
app.use(vastRouter);

module.exports = app;
