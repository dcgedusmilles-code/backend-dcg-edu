'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('evaluation_criterias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        avaliacao_id: {
          type: Sequelize.INTEGER
        },
        descricao: {
          type: Sequelize.STRING
        },
        peso: {
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
    await queryInterface.dropTable('evaluation_criterias');
  }
};