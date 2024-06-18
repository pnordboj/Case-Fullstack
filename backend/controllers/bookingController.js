const { Op } = require('sequelize');
const Booking = require('../models/Booking');
const Room = require('../models/Room');
const Customer = require('../models/Customer');

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [Room, Customer],
        });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createBooking = async (req, res) => {
    try {
        const { room_id, customer_id, start_date, end_date, status } = req.body;

        const existingBookings = await Booking.findAll({
            where: {
                room_id,
                [Op.or]: [
                    {
                        start_date: {
                            [Op.lte]: end_date,
                        },
                        end_date: {
                            [Op.gte]: start_date,
                        },
                    },
                ],
            },
        });

        if (existingBookings.length > 0) {
            return res.status(400).json({ message: 'Room is already booked for the selected dates.' });
        }

        const booking = await Booking.create({ room_id, customer_id, start_date, end_date, status });
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id, {
            include: [Room, Customer],
        });
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        await booking.update(req.body);
        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        await booking.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
