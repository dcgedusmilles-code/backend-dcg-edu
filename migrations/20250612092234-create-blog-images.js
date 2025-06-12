'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blog_images', {
      blogId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'Blogs', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      imageId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'Images', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blog_images');
  }
};