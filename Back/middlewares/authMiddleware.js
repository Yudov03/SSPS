const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Không có token!' });

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) return res.status(500).json({ message: 'Token không hợp lệ!' });

    req.userId = decoded.userId;
    next();
  });
};
