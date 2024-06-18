const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Room = require('./Room');
const Customer = require('./Customer');

const AuditLog = sequelize.define('AuditLog', {
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
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

AuditLog.belongsTo(Room, { foreignKey: 'room_id' });
AuditLog.belongsTo(Customer, { foreignKey: 'customer_id' });

Room.hasMany(AuditLog, { foreignKey: 'room_id' });
Customer.hasMany(AuditLog, { foreignKey: 'customer_id' });

module.exports = AuditLog;
