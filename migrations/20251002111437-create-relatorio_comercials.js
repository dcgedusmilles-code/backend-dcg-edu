'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('relatorio_comercials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        periodo: {
          type: Sequelize.STRING
        },
        total_vendas: {
          type: Sequelize.FLOAT
        },
        total_clientes_novos: {
          type: Sequelize.INTEGER
        },
        taxa_conversao: {
          type: Sequelize.FLOAT
        },
        receita_gerada: {
          type: Sequelize.FLOAT
        },
        comparativo_periodo_anterior: {
          type: Sequelize.FLOAT
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
    await queryInterface.dropTable('relatorio_comercials');
  }
};