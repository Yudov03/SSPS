const express = require('express');
const router = express.Router();
const printercontroller = require('../controller/Controller');

router.get('/', printercontroller.getPrinters);
router.post('/', printercontroller.addPrinter);
router.put('/:id', printercontroller.editPrinter);

// Xóa máy in
router.delete('/:id', printercontroller.deletePrinter);

// Xem chi tiết máy in
router.get('/:id', printercontroller.viewPrinter);
module.exports = router;
