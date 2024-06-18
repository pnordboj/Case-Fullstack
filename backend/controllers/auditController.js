const AuditLog = require('../models/AuditLog');
const Room = require('../models/Room');
const Customer = require('../models/Customer');

exports.getAllAuditLogs = async (req, res) => {
    try {
        const auditLogs = await AuditLog.findAll({ include: [Room, Customer] });
        res.json(auditLogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createAuditLog = async (req, res) => {
    try {
        const auditLog = await AuditLog.create(req.body);
        res.status(201).json(auditLog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
