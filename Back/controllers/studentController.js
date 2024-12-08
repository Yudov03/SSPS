const Student = require('../models/student');

// Lấy danh sách sinh viên
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy thông tin chi tiết của một sinh viên
exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Không tìm thấy sinh viên!' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tạo một sinh viên mới
exports.createStudent = async (req, res) => {
  try {
    const { name, pageBalance } = req.body;
    const newStudent = await Student.create({ name, pageBalance });
    res.status(201).json({
      message: 'Sinh viên đã được tạo thành công!',
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cập nhật thông tin sinh viên
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, pageBalance } = req.body;

    const updated = await Student.update(
      { name, pageBalance },
      { where: { id } }
    );

    if (updated[0] === 1) {
      res.json({ message: 'Cập nhật sinh viên thành công!' });
    } else {
      res.status(404).json({ message: 'Không tìm thấy sinh viên!' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Xóa sinh viên
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Student.destroy({ where: { id } });

    if (deleted) {
      res.json({ message: 'Sinh viên đã được xóa thành công!' });
    } else {
      res.status(404).json({ message: 'Không tìm thấy sinh viên!' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
