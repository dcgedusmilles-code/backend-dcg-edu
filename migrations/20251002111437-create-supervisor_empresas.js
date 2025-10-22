'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('supervisor_empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_empresa: {
          type: Sequelize.INTEGER
        },
        nome: {
          type: Sequelize.STRING
        },
        cargo: {
          type: Sequelize.STRING
        },
        telefone: {
          type: Sequelize.STRING
        },
        email: {
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
    await queryInterface.dropTable('supervisor_empresas');
  }
};