'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cash_movementss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        tipo: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.STRING
        },
        valor: {
          type: Sequelize.FLOAT
        },
        data_movimento: {
          type: Sequelize.DATE
        },
        responsavel: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cash_movementss');
  }
};