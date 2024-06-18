const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');
const Room = require('../models/Room');
const Customer = require('../models/Customer');
const Booking = require('../models/Booking');
const AuditLog = require('../models/AuditLog');

const populateDatabase = async () => {
    try {
        await sequelize.sync({ force: true }); // This will drop and recreate all tables

        // Rooms
        const rooms = await Room.bulkCreate([
            { room_number: '101', category: 'Single', status: 'available' },
            { room_number: '102', category: 'Double', status: 'booked' },
            { room_number: '201', category: 'Suite', status: 'available' },
            { room_number: '202', category: 'Single', status: 'available' },
            { room_number: '301', category: 'Double', status: 'available' },
            { room_number: '302', category: 'Suite', status: 'available' }
        ]);

        // Customers
        const customers = await Customer.bulkCreate([
            { name: 'Ola Nordmann', email: 'ola@example.com', password: await bcrypt.hash('password123', 10), loyalty_points: 100 },
            { name: 'Kari Nordmann', email: 'kari@example.com', password: await bcrypt.hash('password456', 10), loyalty_points: 200 },
            { name: 'Espen Askeladd', email: 'espen@example.com', password: await bcrypt.hash('password789', 10), loyalty_points: 300 },
            { name: 'Tim Nordmann', email: 'tim@example.com', password: await bcrypt.hash('password012', 10), loyalty_points: 400 },
            { name: 'Tom Nordmann', email: 'tom@example.com', password: await bcrypt.hash('password345', 10), loyalty_points: 500 },
            { name: 'Tam Nordmann', email: 'tam@example.com', password: await bcrypt.hash('password678', 10), loyalty_points: 600 }
        ]);

        // Bookings
        const bookings = await Booking.bulkCreate([
            { room_id: rooms[0].id, customer_id: customers[0].id, start_date: '2024-07-01', end_date: '2024-07-10', status: 'confirmed' },
            { room_id: rooms[1].id, customer_id: customers[1].id, start_date: '2024-07-05', end_date: '2024-07-15', status: 'confirmed' },
            { room_id: rooms[2].id, customer_id: customers[2].id, start_date: '2024-07-10', end_date: '2024-07-20', status: 'confirmed' },
            { room_id: rooms[3].id, customer_id: customers[3].id, start_date: '2024-07-15', end_date: '2024-07-25', status: 'confirmed' },
            { room_id: rooms[4].id, customer_id: customers[4].id, start_date: '2024-07-20', end_date: '2024-07-30', status: 'confirmed' },
            { room_id: rooms[5].id, customer_id: customers[5].id, start_date: '2024-07-25', end_date: '2024-08-01', status: 'confirmed' }
        ]);

        // Audit Logs
        const auditLogs = await AuditLog.bulkCreate([
            { room_id: rooms[0].id, customer_id: customers[0].id, action: 'Created booking' },
            { room_id: rooms[1].id, customer_id: customers[1].id, action: 'Created booking' },
            { room_id: rooms[2].id, customer_id: customers[2].id, action: 'Created booking' },
            { room_id: rooms[3].id, customer_id: customers[3].id, action: 'Created booking' },
            { room_id: rooms[4].id, customer_id: customers[4].id, action: 'Created booking' },
            { room_id: rooms[5].id, customer_id: customers[5].id, action: 'Created booking' }
        ]);

        console.log('Database populated successfully.');
    } catch (error) {
        console.error('Error populating database:', error);
    } finally {
        await sequelize.close();
    }
};

populateDatabase();
