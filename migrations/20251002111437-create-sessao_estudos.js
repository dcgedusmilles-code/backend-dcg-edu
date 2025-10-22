'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sessao_estudos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_usuario: {
          type: Sequelize.INTEGER
        },
        local: {
          type: Sequelize.STRING
        },
        data_inicio: {
          type: Sequelize.DATE
        },
        data_fim: {
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
    await queryInterface.dropTable('sessao_estudos');
  }
};