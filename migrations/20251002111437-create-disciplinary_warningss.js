'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('disciplinary_warningss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        funcionario_id: {
          type: Sequelize.INTEGER
        },
        tipo: {
          type: Sequelize.STRING
        },
        motivo: {
          type: Sequelize.TEXT
        },
        data: {
          type: Sequelize.DATE
        },
        responsavel: {
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
    await queryInterface.dropTable('disciplinary_warningss');
  }
};