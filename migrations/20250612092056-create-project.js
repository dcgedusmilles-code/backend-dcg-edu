'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT, allowNull: false },
      images: { type: Sequelize.JSON },
      type: { type: Sequelize.STRING, allowNull: false },
      client: { type: Sequelize.STRING },
      color: { type: Sequelize.STRING },
      format: { type: Sequelize.STRING },
      downloadFiles: { type: Sequelize.JSON },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'CategoryProjects', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};