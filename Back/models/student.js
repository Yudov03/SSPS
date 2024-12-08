const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
  studentID: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pageBalance: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Student;
