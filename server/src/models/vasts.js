const Sequelize = require('sequelize');
const sequelize = require('../db/mysql');

const Vast = sequelize.define('vasts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING(600),
        validate: {
            isUrl: true
        }
    },
    position: {
        type: Sequelize.STRING,
        defaultValue: 'bottom_right',
        validate: {
            isIn: [['top_left', 'top_middle', 'top_right', 'middle_left', 'middle_right', 'bottom_left', 'bottom_middle', 'bottom_right']]
        }
    },
    width: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
        validate: {
            isNumeric: true,
            min: 100,
            max: 1000
        }
    },
    height: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
        validate: {
            isNumeric: true,
            min: 100,
            max: 1000
        }
    }
});

module.exports = Vast;
