const express = require('express');

require('./models/vasts');

const db = require('./db/mysql');
const app = express();

module.exports = app;
