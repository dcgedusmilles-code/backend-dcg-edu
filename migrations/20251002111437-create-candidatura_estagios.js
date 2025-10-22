'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('candidatura_estagios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_vaga: {
          type: Sequelize.INTEGER
        },
        id_estudante: {
          type: Sequelize.INTEGER
        },
        data_candidatura: {
          type: Sequelize.DATE
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
    await queryInterface.dropTable('candidatura_estagios');
  }
};