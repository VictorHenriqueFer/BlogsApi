const { categoriesService } = require('../service');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const categoriesId = await categoriesService.getAllCategories();
 
  const categoryDataValues = categoriesId.map((category) => category.dataValues.id);
 
  const categoryExists = categoryIds.every((categoryId) => categoryDataValues.includes(categoryId));
  if (!categoryExists) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = validatePost;