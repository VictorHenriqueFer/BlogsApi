const { postService } = require('../service');

const getAllPost = async (req, res) => {
  try {
    const posts = await postService.getAllPost();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: 'Algo deu errado' });
  }
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  console.log(req.user);
  const { id } = req.user.dataValues;
  console.log(id);
  const result = await postService.createPost(title, content, id, categoryIds);
  res.status(201).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await postService.findById(id);
  if (!result) return res.status(404).json({ message: 'Post does not exist' });
  res.status(200).json(result);
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { id: userId } = req.user.dataValues;

  const post = await postService.findById(id);
  console.log(userId);
  if (userId !== post.dataValues.userId) {
    return res.status(401)
      .json({ message: 'Unauthorized user' }); 
  }
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const result = await postService.updatePost(title, content, id);
  res.status(200).json(result);
};

const deleteUpdtade = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user.dataValues;
  const post = await postService.findById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  if (userId !== post.dataValues.userId) {
    return res.status(401)
      .json({ message: 'Unauthorized user' }); 
  }
  const result = await postService.deletePost(id);
  res.status(204).json(result);
};

module.exports = {
  getAllPost,
  createPost,
  findById,
  updatePost,
  deleteUpdtade,
};