const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Printer = sequelize.define('Printer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  ip: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('D', 'E'), defaultValue: 'D' },
  lastUsed: { type: DataTypes.DATE },
  condition: { type: DataTypes.ENUM('U', 'M', 'B', 'R') },
  description: { type: DataTypes.TEXT },
});

module.exports = Printer;
