const { Payment, Student } = require('../models');

// Lấy danh sách thanh toán
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm thanh toán mới
exports.addPayment = async (req, res) => {
  try {
    const { studentID, amount } = req.body;

    const student = await Student.findByPk(studentID);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    // Cập nhật số dư trang của sinh viên
    student.pageBalance += amount;
    await student.save();

    // Lưu thanh toán
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
