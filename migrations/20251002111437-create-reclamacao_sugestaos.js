'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reclamacao_sugestaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_estudante: {
          type: Sequelize.INTEGER
        },
        tipo: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        data_envio: {
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
    await queryInterface.dropTable('reclamacao_sugestaos');
  }
};