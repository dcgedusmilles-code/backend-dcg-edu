'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('logs_accesss', {
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
        acao: {
          type: Sequelize.STRING
        },
        data_hora: {
          type: Sequelize.DATE
        },
        ip_origem: {
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
    await queryInterface.dropTable('logs_accesss');
  }
};