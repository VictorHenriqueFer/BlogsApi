'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'blog_posts',
          key: 'id'
        }
      },
      category_id: {
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
  return queryInterface.dropTable('posts_categories');
  }
};
