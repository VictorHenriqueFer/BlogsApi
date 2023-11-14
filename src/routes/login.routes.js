const route = require('express').Router();

const { loginController } = require('../controller');

route.post('/', loginController.login);

module.exports = route;