'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('assessment_resourcess', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        resultado_id: {
          type: Sequelize.INTEGER
        },
        participante_id: {
          type: Sequelize.INTEGER
        },
        data_solicitacao: {
          type: Sequelize.DATE
        },
        justificativa: {
          type: Sequelize.TEXT
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
    await queryInterface.dropTable('assessment_resourcess');
  }
};