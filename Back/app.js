const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const printerRoutes = require('./routes/printerRoutes');
const studentRoutes = require('./routes/studentRoutes');
const configRoutes = require('./routes/configRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route (login page)
app.get('/', (req, res) => {
  res.send('Trang đăng nhập');
});

// Printer routes
app.use('/printers', printerRoutes);

// Student routes
app.use('/student', studentRoutes);

// Config routes
app.use('/config', configRoutes);

// Dashboard route
app.get('/dashboard', (req, res) => {
  res.send('Trang tổng quan');
});

// Help route
app.get('/help', (req, res) => {
  res.send('Trang trợ giúp');
});

// Setting route
app.get('/setting', (req, res) => {
  res.send('Trang cài đặt');
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).send('Không tìm thấy trang!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

module.exports = app;
