'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('oportunidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_lead: {
          type: Sequelize.INTEGER
        },
        descricao: {
          type: Sequelize.TEXT
        },
        valor_estimado: {
          type: Sequelize.FLOAT
        },
        probabilidade: {
          type: Sequelize.FLOAT
        },
        etapa_venda: {
          type: Sequelize.STRING
        },
        responsavel: {
          type: Sequelize.INTEGER
        },
        data_inicio: {
          type: Sequelize.DATE
        },
        data_fechamento: {
          type: Sequelize.DATE
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
    await queryInterface.dropTable('oportunidades');
  }
};