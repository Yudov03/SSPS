const express = require('express');
const {
  getPrinters,
  addPrinter,
  editPrinter,
  getPrinterInfo,
} = require('../controllers/printerController');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getPrinters);
router.post('/add', verifyToken, addPrinter);
router.put('/edit/:id', verifyToken, editPrinter);
router.get('/info/:id', verifyToken, getPrinterInfo);

module.exports = router;
