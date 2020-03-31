const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.SCHEMA, process.env.HOST, process.env.PASSWORD, {
    dialect: 'mysql',
    host: process.env.HOST
});

module.exports = sequelize;
