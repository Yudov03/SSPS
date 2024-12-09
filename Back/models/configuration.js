const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Configuration = sequelize.define('Configuration', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  defaultPageLimit: {
    type: DataTypes.INTEGER,
    defaultValue: 100,
  },
  allowedFileTypes: {
    type: DataTypes.TEXT,
    defaultValue: 'pdf,docx,jpg',
  },
  lastChangeDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Configuration;
