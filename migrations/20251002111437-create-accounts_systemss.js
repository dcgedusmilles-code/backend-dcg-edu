'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts_systemss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        usuario_id: {
          type: Sequelize.INTEGER
        },
        sistema: {
          type: Sequelize.STRING
        },
        username: {
          type: Sequelize.STRING
        },
        senha_hash: {
          type: Sequelize.STRING
        },
        status: {
          type: Sequelize.STRING
        },
        data_criacao: {
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
    await queryInterface.dropTable('accounts_systemss');
  }
};