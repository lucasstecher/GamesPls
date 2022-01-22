const Sequelize = require('sequelize');
const database = require('../dbConnection');

const Game = database.define('game', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    studio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    release_date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    story: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false, // Avoid created_at and updated_at being auto generated by sequelize
    underscored: true
});

module.exports = Game;