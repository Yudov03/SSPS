const express = require('express');
const router = express.Router();
const { getConfig, updateConfig } = require('../controllers/configController');

// Route để lấy cấu hình
router.get('/', getConfig);

// Route để cập nhật cấu hình
router.put('/', updateConfig);

module.exports = router;
