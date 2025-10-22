'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('campaignss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        titulo: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        tipo_campanha: {
          type: Sequelize.STRING
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
        orcamento_estimado: {
          type: Sequelize.FLOAT
        },
        orcamento_real: {
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
    await queryInterface.dropTable('campaignss');
  }
};