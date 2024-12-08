const Configuration = require('../models/Configuration');

// Lấy thông tin cấu hình
exports.getConfig = async (req, res) => {
  try {
    const config = await Configuration.findOne();
    if (config) {
      res.json(config);
    } else {
      res.status(404).json({ message: 'Không tìm thấy cấu hình!' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cập nhật cấu hình
exports.updateConfig = async (req, res) => {
  try {
    const { defaultPageLimit, allowedFileTypes } = req.body;
    const updated = await Configuration.update(
      { defaultPageLimit, allowedFileTypes },
      { where: { id: 1 } } // Giả định cấu hình chỉ có một bản ghi
    );
    if (updated[0] === 1) {
      res.json({ message: 'Cập nhật cấu hình thành công!' });
    } else {
      res.status(404).json({ message: 'Không tìm thấy cấu hình!' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
