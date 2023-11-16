const route = require('express').Router();

const { categoriesController } = require('../controller');
const { auth } = require('../middlewares');

route.get(
  '/',
  auth,
  categoriesController.getAllCategories,
);

route.post(
  '/',
  auth,

  categoriesController.createCategory,
);

module.exports = route;