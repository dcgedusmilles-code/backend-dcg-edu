'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('assessment_resultss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        avaliacao_id: {
          type: Sequelize.INTEGER
        },
        participante_id: {
          type: Sequelize.INTEGER
        },
        nota_reading: {
          type: Sequelize.FLOAT
        },
        nota_writer: {
          type: Sequelize.FLOAT
        },
        nota_speek: {
          type: Sequelize.FLOAT
        },
        nota: {
          type: Sequelize.FLOAT
        },
        status: {
          type: Sequelize.STRING
        },
        observacao: {
          type: Sequelize.TEXT
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
    await queryInterface.dropTable('assessment_resultss');
  }
};