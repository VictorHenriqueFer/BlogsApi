const jwt = require('jsonwebtoken');
const { User } = require('../models');

const KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

const login = async (email, password) => {
  if (!email || !password) {
    return { status: 400, data: { message: 'Some required fields are missing' } }; 
  }
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { status: 400, data: { message: 'Invalid fields' } };
  const { password: _, ...dataValues } = user;
  const token = jwt.sign(dataValues, KEY, { expiresIn: '10d' });
  return { status: 200, data: { token } };
};

module.exports = {
  login,
};