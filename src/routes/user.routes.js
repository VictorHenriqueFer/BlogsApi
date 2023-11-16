const route = require('express').Router();

const { userController } = require('../controller');
const { validateUser, auth } = require('../middlewares');

route.get(
  '/',
  auth,
  userController.getAllUsers,
);

route.get(
  '/:id',
  auth,
  userController.findById,
);

route.post(
  '/',
  validateUser,
  userController.createUser,
);

route.delete(
  '/me',
  auth,
  userController.deleteMe,
);

module.exports = route;