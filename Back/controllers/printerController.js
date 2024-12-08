const Printer = require('../models/Printer');

// Lấy danh sách máy in
exports.getPrinters = async (req, res) => {
  try {
    const printers = await Printer.findAll();
    res.json(printers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Thêm máy in
exports.addPrinter = async (req, res) => {
  try {
    const newPrinter = await Printer.create(req.body);
    res.status(201).json(newPrinter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Sửa máy in
exports.editPrinter = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Printer.update(req.body, { where: { id } });
    res.json({ message: 'Cập nhật thành công!', updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Chi tiết máy in
exports.getPrinterInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const printer = await Printer.findByPk(id);
    if (!printer) return res.status(404).json({ message: 'Không tìm thấy máy in!' });
    res.json(printer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
