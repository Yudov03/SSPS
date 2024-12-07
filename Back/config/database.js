const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('printing_system', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql', // hoặc 'postgres', 'sqlite'
});

module.exports = sequelize;
// thay root va passoword bang ten tai khoan va mat khau SQL