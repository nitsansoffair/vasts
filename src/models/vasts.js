const Sequelize = require('sequelize');
const sequelize = require('../db/mysql');

// TODO - Add validators
const Vast = sequelize.define('vasts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING(600)
    },
    position: {
        type: Sequelize.STRING,
        defaultValue: 'bottom_right'
    },
    width: {
        type: Sequelize.INTEGER,
        defaultValue: 100
    },
    height: {
        type: Sequelize.INTEGER,
        defaultValue: 100
    }
});

module.exports = Vast;
