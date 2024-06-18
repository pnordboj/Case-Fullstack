const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const app = express();
app.use(bodyParser.json());

const Room = sequelize.define('Room', {
    room_number: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }
});

const Booking = sequelize.define('Booking', {
    room_id: { type: DataTypes.INTEGER, allowNull: false },
    customer_id: { type: DataTypes.INTEGER, allowNull: false },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }
});

const Customer = sequelize.define('Customer', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    loyalty_points: { type: DataTypes.INTEGER, defaultValue: 0 }
});

const AuditLog = sequelize.define('AuditLog', {
    room_id: { type: DataTypes.INTEGER, allowNull: false },
    customer_id: { type: DataTypes.INTEGER, allowNull: false },
    action: { type: DataTypes.STRING, allowNull: false },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

app.post('/rooms', async (req, res) => {
    const { room_number, category, status } = req.body;
    const room = await Room.create({ room_number, category, status });
    res.json(room);
});

app.post('/bookings', async (req, res) => {
    const { room_id, customer_id, start_date, end_date, status } = req.body;
    const booking = await Booking.create({ room_id, customer_id, start_date, end_date, status });
    res.json(booking);
});

app.post('/customers', async (req, res) => {
    const { name, email, loyalty_points } = req.body;
    const customer = await Customer.create({ name, email, loyalty_points });
    res.json(customer);
});

app.get('/audit-logs', async (req, res) => {
    const logs = await AuditLog.findAll();
    res.json(logs);
});

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
