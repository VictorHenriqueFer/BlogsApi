const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  const tokenBarer = token.split(' ')[1];

  try {
    const payload = jwt.verify(tokenBarer, KEY);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
module.exports = auth;