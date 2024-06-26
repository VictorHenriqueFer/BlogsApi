'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false
      },
      content:{
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      published:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('blog_posts');
  }
};
