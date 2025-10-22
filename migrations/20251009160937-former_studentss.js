'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('former_studentss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_estudante: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'students', // ajuste se o nome da tabela da model Aluno for diferente
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      empresa_atual: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cargo_atual: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status_emprego: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('former_studentss');
  }
};

