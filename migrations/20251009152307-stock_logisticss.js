'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stock_logisticss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_item: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: true
      },
      quantidade_disponivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      unidade: {
        type: Sequelize.STRING,
        allowNull: true
      },
      local_armazenado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locationss', // tabela referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('stock_logisticss');
  }
};

