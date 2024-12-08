const express = require('express');
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController'); // Kiểm tra đường dẫn import

const router = express.Router();

// Định nghĩa các route
router.get('/', getStudents);          // Lấy danh sách sinh viên
router.get('/:id', getStudentById);    // Lấy sinh viên theo ID
router.post('/', createStudent);       // Tạo sinh viên mới
router.put('/:id', updateStudent);     // Cập nhật thông tin sinh viên
router.delete('/:id', deleteStudent);  // Xóa sinh viên

module.exports = router;
