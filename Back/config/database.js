const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SSPS', 'root', 'Kietdeptrai1234', {
  host: 'localhost',
  dialect: 'mysql', // Sử dụng MySQL
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Kết nối cơ sở dữ liệu thành công!');
  })
  .catch((err) => {
    console.error('Lỗi kết nối cơ sở dữ liệu:', err);
  });

module.exports = sequelize;
