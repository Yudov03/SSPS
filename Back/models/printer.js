const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Printer = sequelize.define('Printer', {
  printerID: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  model: DataTypes.STRING,
  manufacturer: DataTypes.STRING,
  description: DataTypes.STRING,
  location: DataTypes.STRING,
  colorPrinting: DataTypes.BOOLEAN,
  availabilityStatus: DataTypes.BOOLEAN,
});

module.exports = Printer;
