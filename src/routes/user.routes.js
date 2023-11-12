const route = require('express').Router();

const userController = require('../controller');

route.get('/', userController.getAllUsers);

module.exports = route;