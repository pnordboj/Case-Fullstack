const sequelize = require('../config/database');
const Room = require('./Room');
const Booking = require('./Booking');
const Customer = require('./Customer');
const AuditLog = require('./AuditLog');

Booking.belongsTo(Room, { foreignKey: 'room_id' });
Booking.belongsTo(Customer, { foreignKey: 'customer_id' });
AuditLog.belongsTo(Room, { foreignKey: 'room_id' });
AuditLog.belongsTo(Customer, { foreignKey: 'customer_id' });

Room.hasMany(Booking, { foreignKey: 'room_id' });
Customer.hasMany(Booking, { foreignKey: 'customer_id' });
Room.hasMany(AuditLog, { foreignKey: 'room_id' });
Customer.hasMany(AuditLog, { foreignKey: 'customer_id' });

sequelize.sync({ alter: true });

module.exports = {
    sequelize,
    Room,
    Booking,
    Customer,
    AuditLog,
};
