const express = require('express');

require('./models/vasts');

const db = require('./db/mysql');
const app = express();

db.execute('SELECT * FROM vasts')
    .then(vasts => console.log(vasts))
    .catch();

module.exports = app;
