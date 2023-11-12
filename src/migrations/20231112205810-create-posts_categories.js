'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'blog_posts',
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
