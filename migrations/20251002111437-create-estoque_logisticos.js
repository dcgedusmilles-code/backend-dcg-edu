'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estoque_logisticos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome_item: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        categoria: {
          type: Sequelize.STRING
        },
        quantidade_disponivel: {
          type: Sequelize.INTEGER
        },
        unidade: {
          type: Sequelize.STRING
        },
        local_armazenado: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('estoque_logisticos');
  }
};