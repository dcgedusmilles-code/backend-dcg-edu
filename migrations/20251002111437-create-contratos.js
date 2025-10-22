'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contratos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_cliente: {
          type: Sequelize.INTEGER
        },
        numero_contrato: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        valor_total: {
          type: Sequelize.FLOAT
        },
        data_inicio: {
          type: Sequelize.DATE
        },
        data_fim: {
          type: Sequelize.DATE
        },
        status: {
          type: Sequelize.STRING
        },
        id_responsavel: {
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
    await queryInterface.dropTable('contratos');
  }
};