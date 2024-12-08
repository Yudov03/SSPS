const express = require('express');
const { addPrinter, getPrinters } = require('../controllers/printerController');

const router = express.Router();

router.post('/printers', addPrinter);
router.get('/printers', getPrinters);

module.exports = router;
