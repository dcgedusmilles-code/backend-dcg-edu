'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('finess', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_emprestimo: {
        type: Sequelize.INTEGER,
        allowNull: true // FK será adicionada depois
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: true // FK será adicionada depois
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true // FK será adicionada depois
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      motivo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_emissao: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true // Ex: pendente, pago, cancelado
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('finess');
  }
};
