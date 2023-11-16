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

const updatePost = async (title, content, id) => {
  await BlogPost.update({ title, content }, { where: { id } });

  const postReturn = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });

  return postReturn;
};

const deletePost = async (id) => {
  await PostCategory.destroy({ where: { postId: id } });
  const post = await BlogPost.findOne({ where: { id } });
  await BlogPost.destroy({ where: { id } });
  return post;
};

module.exports = {
  getAllPost,
  createPost,
  findById,
  updatePost,
  deletePost,
};