const express = require('express');
const router = express.Router();
const printercontroller = require('../controller/Controller');

router.get('/', printercontroller.getPrinters);
router.post('/', printercontroller.addPrinter);

module.exports = router;
