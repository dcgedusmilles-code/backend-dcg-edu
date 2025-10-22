'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heritages', {
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
      numero_tombo: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_aquisicao: {
        type: Sequelize.DATE,
        allowNull: true
      },
      valor_aquisicao: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: true
      },
      localizacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locais', // tabela relacionada
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
    await queryInterface.dropTable('heritages');
  }
};

