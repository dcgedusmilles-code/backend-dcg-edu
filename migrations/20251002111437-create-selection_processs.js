'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('selection_processs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        vaga_id: {
          type: Sequelize.INTEGER
        },
        candidato_id: {
          type: Sequelize.INTEGER
        },
        status: {
          type: Sequelize.STRING
        },
        data_etapa: {
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
    await queryInterface.dropTable('selection_processs');
  }
};