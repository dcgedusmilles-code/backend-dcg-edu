'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome: {
          type: Sequelize.STRING
        },
        data_nascimento: {
          type: Sequelize.DATE
        },
        sexo: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        telefone: {
          type: Sequelize.STRING
        },
        documento: {
          type: Sequelize.STRING
        },
        endereco: {
          type: Sequelize.STRING
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
    await queryInterface.dropTable('studentss');
  }
};