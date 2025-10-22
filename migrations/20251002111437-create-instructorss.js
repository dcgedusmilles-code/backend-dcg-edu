'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('instructorss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        telefone: {
          type: Sequelize.STRING
        },
        especialidade: {
          type: Sequelize.STRING
        },
        curriculo: {
          type: Sequelize.TEXT
        },
        departamento_id: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('instructorss');
  }
};