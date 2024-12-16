const Printer = require('../models/Printer');
exports.getPrinters = async (req, res) => {
    try {
      const printers = await Printer.find();
      res.status(200).json(printers);
    } catch (error) {
        console.error('Error retrieving print history:', error);
        res.status(500).json({ message: 'Error retrieving print history', error });
    }
  };
  
  // Thêm máy in
  exports.addPrinter = async (req, res) => {
    try {
      const { name, ip, location, status, lastUsed, condition, description } = req.body;
      const lastPrinter = await Printer.findOne().sort({ id: -1 }); 
      const newId = lastPrinter ? lastPrinter.id + 1 : 1;
      const newPrinter = new Printer({
        id: newId,
        name,
        ip,
        location,
        status,
        lastUsed,
        condition,
        description
      })
      await newPrinter.save();
      // const newPrinter = await Printer.create(req.body);
      res.status(201).json("ok");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  // Chỉnh sửa máy in
exports.editPrinter = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, ip, location, status, lastUsed, condition, description } = req.body;

    const updatedPrinter = await Printer.findOneAndUpdate(
      { id: parseInt(id) }, // Tìm máy in theo ID
      { name, ip, location, status, lastUsed, condition, description }, // Cập nhật thông tin
      { new: true } // Trả về bản ghi sau khi cập nhật
    );

    if (!updatedPrinter) {
      return res.status(404).json({ message: 'Printer not found.' });
    }

    res.status(200).json({ message: 'Printer updated successfully.', updatedPrinter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Xóa máy in
exports.deletePrinter = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPrinter = await Printer.findOneAndDelete({ id: parseInt(id) });

    if (!deletedPrinter) {
      return res.status(404).json({ message: 'Printer not found.' });
    }

    res.status(200).json({ message: 'Printer deleted successfully.', deletedPrinter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Xem chi tiết máy in
exports.viewPrinter = async (req, res) => {
  try {
    const { id } = req.params;

    const printer = await Printer.findOne({ id: parseInt(id) });

    if (!printer) {
      return res.status(404).json({ message: 'Không tìm thấy máy in!' });
    }

    res.status(200).json(printer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
