const Printer = require('../models/printer');

// Thêm máy in mới
exports.addPrinter = async (req, res) => {
  try {
    const printer = await Printer.create(req.body);
    res.status(201).json(printer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lấy danh sách máy in
exports.getPrinters = async (req, res) => {
  try {
    const printers = await Printer.findAll();
    res.status(200).json(printers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
