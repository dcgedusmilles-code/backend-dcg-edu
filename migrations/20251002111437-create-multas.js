'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('multas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_emprestimo: {
          type: Sequelize.INTEGER
        },
        id_usuario: {
          type: Sequelize.INTEGER
        },
        valor: {
          type: Sequelize.FLOAT
        },
        motivo: {
          type: Sequelize.STRING
        },
        data_emissao: {
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
    await queryInterface.dropTable('multas');
  }
};