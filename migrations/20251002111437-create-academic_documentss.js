'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('academic_documentss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        aluno_id: {
          type: Sequelize.INTEGER
        },
        tipo: {
          type: Sequelize.STRING
        },
        data_emissao: {
          type: Sequelize.DATE
        },
        status: {
          type: Sequelize.STRING
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
    await queryInterface.dropTable('academic_documentss');
  }
};