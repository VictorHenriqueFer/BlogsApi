const route = require('express').Router();

const { postController } = require('../controller');
const { auth, validatePost } = require('../middlewares');

route.get(
  '/',
  auth,

  postController.getAllPost,
);

route.get(
  '/:id',
  auth,
  postController.findById,
);

route.post(
  '/',
  auth,
  validatePost,

  postController.createPost,
);

route.put(
  '/:id',
  auth,
  postController.updatePost,
);

route.delete(
  '/:id',
  auth,
  postController.deleteUpdtade,
);

module.exports = route;