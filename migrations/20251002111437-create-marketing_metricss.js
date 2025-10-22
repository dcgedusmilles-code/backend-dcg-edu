'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('marketing_metricss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_campanha: {
          type: Sequelize.INTEGER
        },
        alcance: {
          type: Sequelize.INTEGER
        },
        interacoes: {
          type: Sequelize.INTEGER
        },
        conversoes: {
          type: Sequelize.INTEGER
        },
        ROI: {
          type: Sequelize.FLOAT
        },
        periodo_avaliado: {
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
    await queryInterface.dropTable('marketing_metricss');
  }
};