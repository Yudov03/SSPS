const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const printerRoutes = require('./routes/printerRoutes');
const studentRoutes = require('./routes/studentRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const printLogRoutes = require('./routes/printLogRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Đăng ký route cho API
app.use('/api', printerRoutes);
app.use('/api', studentRoutes);
app.use('/api', paymentRoutes);
app.use('/api', printLogRoutes);

// Kết nối cơ sở dữ liệu và chạy server
sequelize.sync().then(() => {
  console.log('Kết nối cơ sở dữ liệu thành công!');
  app.listen(3000, () => console.log('Server đang chạy trên cổng 3000'));
}).catch((err) => console.error('Lỗi kết nối cơ sở dữ liệu:', err));
