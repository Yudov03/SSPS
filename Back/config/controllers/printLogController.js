const { PrintLog, Student } = require('../models');

// Lấy nhật ký in
exports.getPrintLogs = async (req, res) => {
  try {
    const logs = await PrintLog.findAll();
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm nhật ký in
exports.addPrintLog = async (req, res) => {
  try {
    const { studentID, printerID, filename } = req.body;

    const student = await Student.findByPk(studentID);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    if (student.pageBalance <= 0) {
      return res.status(400).json({ error: 'Insufficient page balance' });
    }

    // Trừ số dư trang
    student.pageBalance -= 1;
    await student.save();

    // Thêm nhật ký in
    const log = await PrintLog.create(req.body);
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
