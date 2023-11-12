const { userService } = require('../service');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllUsers,
};