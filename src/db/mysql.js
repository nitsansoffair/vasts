const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.SCHEMA,
    password: process.env.PASSWORD
});

module.exports = pool.promise();
