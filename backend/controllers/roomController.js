const Room = require('../models/Room');

exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRoomById = async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRoom = async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        await room.update(req.body);
        res.json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRoom = async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        await room.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
