'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vaga_estagios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_empresa: {
          type: Sequelize.INTEGER
        },
        titulo_vaga: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        requisitos: {
          type: Sequelize.TEXT
        },
        carga_horaria: {
          type: Sequelize.STRING
        },
        remuneracao: {
          type: Sequelize.FLOAT
        },
        data_abertura: {
          type: Sequelize.DATE
        },
        data_fechamento: {
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
    await queryInterface.dropTable('vaga_estagios');
  }
};