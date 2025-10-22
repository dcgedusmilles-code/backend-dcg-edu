'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('software_licensess', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome_software: {
          type: Sequelize.STRING
        },
        chave_licenca: {
          type: Sequelize.STRING
        },
        quantidade: {
          type: Sequelize.INTEGER
        },
        data_inicio: {
          type: Sequelize.DATE
        },
        data_validade: {
          type: Sequelize.DATE
        },
        fornecedor: {
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
    await queryInterface.dropTable('software_licensess');
  }
};