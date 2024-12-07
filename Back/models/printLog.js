const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PrintLog = sequelize.define('PrintLog', {
  logID: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  studentID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  printerID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  printTime: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  pagePrinted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = PrintLog;
