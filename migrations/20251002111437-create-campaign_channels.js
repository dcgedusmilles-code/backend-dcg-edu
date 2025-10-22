'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('campaign_channels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_campanha: {
          type: Sequelize.INTEGER
        },
        id_canal: {
          type: Sequelize.INTEGER
        },
        custo: {
          type: Sequelize.FLOAT
        },
        resultado_medido: {
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
    await queryInterface.dropTable('campaign_channels');
  }
};