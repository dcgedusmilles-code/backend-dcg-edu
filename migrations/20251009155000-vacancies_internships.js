'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vacancies_internships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_empresa: {
        type: Sequelize.INTEGER,
        allowNull: true // FK será adicionada em outra migration
      },
      titulo_vaga: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      requisitos: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      carga_horaria: {
        type: Sequelize.STRING,
        allowNull: true
      },
      remuneracao: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      data_abertura: {
        type: Sequelize.DATE,
        allowNull: true
      },
      data_fechamento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'aberta'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('vacancies_internships');
  }
};
