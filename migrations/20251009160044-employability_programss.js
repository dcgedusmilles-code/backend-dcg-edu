'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employability_programss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: true
      },
      data_fim: {
        type: Sequelize.DATE,
        allowNull: true
      },
      parceiro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'partner_companies', // Nome da tabela de EmpresaParceira (ajusta se for diferente)
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employability_programss');
  }
};

