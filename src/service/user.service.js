const jwt = require('jsonwebtoken');
const { User } = require('../models');

const KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
    
  return users;
};
const findById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user;
};

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  const { displayName: userDisplayName,
    image: userImage, password: userPassword, ...payload } = user;
  const token = jwt.sign(payload, KEY, { expiresIn: '2d' });
  return { status: 201, data: { token } };
};     

const deleteMe = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getAllUsers,
  createUser,
  findById,
  deleteMe,
};
