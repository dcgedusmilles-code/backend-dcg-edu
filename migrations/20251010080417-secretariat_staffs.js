'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Cria a tabela sem foreign keys inicialmente
    await queryInterface.createTable('secretariat_staffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      secretaria_id: {
        type: Sequelize.INTEGER,
        allowNull: true // FK será adicionada depois
      },
      funcionario_id: {
        type: Sequelize.INTEGER,
        allowNull: true // FK será adicionada depois
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Índices opcionais para performance em joins
    await queryInterface.addIndex('secretariat_staffs', ['secretaria_id']);
    await queryInterface.addIndex('secretariat_staffs', ['funcionario_id']);
  },

  async down(queryInterface) {
    await queryInterface.removeIndex('secretariat_staffs', ['secretaria_id']);
    await queryInterface.removeIndex('secretariat_staffs', ['funcionario_id']);
    await queryInterface.dropTable('secretariat_staffs');
  }
};
