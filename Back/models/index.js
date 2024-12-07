const sequelize = require('../config/database');
const Printer = require('./printer');
const Student = require('./student');
const Payment = require('./payment');
const PrintLog = require('./printLog');

// Định nghĩa quan hệ giữa các model
Student.hasMany(Payment, { foreignKey: 'studentID' });
Payment.belongsTo(Student, { foreignKey: 'studentID' });

Student.hasMany(PrintLog, { foreignKey: 'studentID' });
PrintLog.belongsTo(Student, { foreignKey: 'studentID' });

Printer.hasMany(PrintLog, { foreignKey: 'printerID' });
PrintLog.belongsTo(Printer, { foreignKey: 'printerID' });

module.exports = { sequelize, Printer, Student, Payment, PrintLog };
