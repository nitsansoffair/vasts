const express = require('express');
require('./models/vasts');
const vastRouter = require('./routes/vasts');

const app = express();

// TODO - Improve security
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    next();
});

app.use(express.json());
app.use(vastRouter);

module.exports = app;
