'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('obra_infraestruturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome_obra: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        local: {
          type: Sequelize.INTEGER
        },
        fornecedor: {
          type: Sequelize.INTEGER
        },
        custo_estimado: {
          type: Sequelize.FLOAT
        },
        custo_real: {
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
    await queryInterface.dropTable('obra_infraestruturas');
  }
};