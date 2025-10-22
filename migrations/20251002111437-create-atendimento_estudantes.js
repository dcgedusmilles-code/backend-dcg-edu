'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atendimento_estudantes', {
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
        data_atendimento: {
          type: Sequelize.DATE
        },
        responsavel: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('atendimento_estudantes');
  }
};