const express = require('express');
const { getPrintLogs, addPrintLog } = require('../controllers/printLogController');

const router = express.Router();

router.get('/print-logs', getPrintLogs);
router.post('/print-logs', addPrintLog);

module.exports = router;
