const { userService } = require('../service');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await userService.createUser(displayName, email, password, image);
  res.status(result.status).json(result.data);
};
const deleteMe = async (req, res) => {
  const { id } = req.user;
  await userService.deleteMe(id);
  res.status(204).end();
};

module.exports = {
  getAllUsers,
  createUser,
  findById,
  deleteMe,
};