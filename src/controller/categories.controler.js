const { categoriesService } = require('../service');

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoriesService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const result = await categoriesService.createCategory(name);
  res.status(201).json(result);
};

module.exports = {
  getAllCategories,
  createCategory,
};