const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Đăng nhập
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(401).json({ message: 'Tài khoản không tồn tại!' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Mật khẩu không đúng!' });

    const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
    res.json({ message: 'Đăng nhập thành công!', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Đăng ký
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ message: 'Tài khoản đã tồn tại!' });

    const newUser = await User.create({ username, password });
    res.status(201).json({ message: 'Đăng ký thành công!', data: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
