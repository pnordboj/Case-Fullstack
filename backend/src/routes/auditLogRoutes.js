const express = require('express');
const {
    getAllAuditLogs,
    createAuditLog,
} = require('../controllers/auditController');

const router = express.Router();

router.get('/', getAllAuditLogs);
router.post('/', createAuditLog);

module.exports = router;
