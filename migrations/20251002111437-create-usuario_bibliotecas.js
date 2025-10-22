'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario_bibliotecas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_estudante: {
          type: Sequelize.INTEGER
        },
        id_funcionario: {
          type: Sequelize.INTEGER
        },
        nome: {
          type: Sequelize.STRING
        },
        tipo: {
          type: Sequelize.STRING
        },
        contato: {
          type: Sequelize.STRING
        },
        data_registro: {
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
    await queryInterface.dropTable('usuario_bibliotecas');
  }
};