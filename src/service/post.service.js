const { PostCategory, BlogPost, User, Category } = require('../models');

const getAllPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
    attributes: { exclude: ['password'] }, 
  });
  return posts;
};

const createPost = async (title, content, userId, categoryIds) => {
  const post = await BlogPost.create({ title, content, userId });
  const postCategory = categoryIds.map((categoryId) => (
    PostCategory.create({ postId: post.id, categoryId })
  )); 
  await Promise.all(postCategory);

  return post;
};

const findById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

module.exports = {
  getAllPost,
  createPost,
  findById,
};