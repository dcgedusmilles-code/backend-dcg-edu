'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      paymentIntent: { type: Sequelize.JSON },
      orderStatus: {
        type: Sequelize.ENUM("Not Processed", "Cash on Delivery", "Processing", "Dispatched", "Cancelled", "Delivered"),
        defaultValue: "Not Processed"
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // Se o usuário for deletado, o pedido permanece, mas sem dono
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};