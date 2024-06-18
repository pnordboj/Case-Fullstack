const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Room = require('./Room');
const Customer = require('./Customer');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Booking.belongsTo(Room, { foreignKey: 'room_id' });
Booking.belongsTo(Customer, { foreignKey: 'customer_id' });

module.exports = Booking;
