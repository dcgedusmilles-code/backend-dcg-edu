'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('it_userss', {
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
        departamento_id: {
          type: Sequelize.INTEGER
        },
        cargo: {
          type: Sequelize.STRING
        },
        tipo_usuario: {
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
    await queryInterface.dropTable('it_userss');
  }
};