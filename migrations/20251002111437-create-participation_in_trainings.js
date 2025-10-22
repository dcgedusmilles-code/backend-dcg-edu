'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('participation_in_trainings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        treinamento_id: {
          type: Sequelize.INTEGER
        },
        funcionario_id: {
          type: Sequelize.INTEGER
        },
        status: {
          type: Sequelize.STRING
        },
        nota_avaliacao: {
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
    await queryInterface.dropTable('participation_in_trainings');
  }
};