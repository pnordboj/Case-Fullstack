const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hoteldb', 'hoteladmin', 'P@assord', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
