const express = require('express');
const {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

const router = express.Router();

router.get('/students', getStudents);
router.get('/students/:id', getStudentById);
router.post('/students', addStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;
