'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('certificate_historys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        certificado_id: {
          type: Sequelize.INTEGER
        },
        acao: {
          type: Sequelize.STRING
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
    await queryInterface.dropTable('certificate_historys');
  }
};