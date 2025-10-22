'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('financial_reportss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        tipo: {
          type: Sequelize.STRING
        },
        periodo_inicio: {
          type: Sequelize.DATE
        },
        periodo_fim: {
          type: Sequelize.DATE
        },
        gerado_em: {
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
    await queryInterface.dropTable('financial_reportss');
  }
};