const express = require('express');
require('./models/vasts');
const vastRouter = require('./routes/vasts');
const User = require('./models/users');

const app = express();

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': process.env.ALLOWED_URL,
        'Access-Control-Allow-Headers': process.env.ALLOWED_HEADERS
    });
    next();
});
app.use((req, res, next) => {
    User.findOne({ email: process.env.DUMMY_EMAIL })
        .then(user => {
            req.user = user;
            next();
        })
        .catch(e => console.log(e));
});

app.use(express.json());
app.use(vastRouter);

module.exports = app;
