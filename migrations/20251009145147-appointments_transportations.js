'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments_transportations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_transporte: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'transportes', // tabela referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      finalidade: {
        type: Sequelize.STRING,
        allowNull: true
      },
      motorista: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'funcionarios', // tabela referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      origem: {
        type: Sequelize.STRING,
        allowNull: true
      },
      destino: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_saida: {
        type: Sequelize.DATE,
        allowNull: true
      },
      data_retorno: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appointments_transportations');
  }
};

