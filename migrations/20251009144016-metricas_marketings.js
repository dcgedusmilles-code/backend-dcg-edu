'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('metricas_marketings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_campanha: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'campanhas', // nome da tabela associada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      alcance: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      interacoes: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      conversoes: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ROI: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      periodo_avaliado: {
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
    await queryInterface.dropTable('metricas_marketings');
  }
};

