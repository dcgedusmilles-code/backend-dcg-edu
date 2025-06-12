'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING, allowNull: false },
      slug: { type: Sequelize.STRING, allowNull: false, unique: true },
      description: { type: Sequelize.TEXT, allowNull: false },
      price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
      brand: { type: Sequelize.STRING, allowNull: false },
      quantity: { type: Sequelize.INTEGER, allowNull: false },
      sold: { type: Sequelize.INTEGER, defaultValue: 0 },
      images: { type: Sequelize.JSON, defaultValue: [] },
      color: { type: Sequelize.JSON, defaultValue: [] },
      tags: { type: Sequelize.STRING },
      totalrating: { type: Sequelize.STRING, defaultValue: "0" },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'ProductCategories', key: 'id'
         },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};