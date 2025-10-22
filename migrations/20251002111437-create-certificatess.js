'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('certificatess', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        participante_id: {
          type: Sequelize.INTEGER
        },
        curso_id: {
          type: Sequelize.INTEGER
        },
        turma_id: {
          type: Sequelize.INTEGER
        },
        data_emissao: {
          type: Sequelize.DATE
        },
        codigo_validacao: {
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
    await queryInterface.dropTable('certificatess');
  }
};