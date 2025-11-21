'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      unidade_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'units',
          key: 'id',
        },
        allowNull: true,
      },

      turma_id: {
        type: Sequelize.INTEGER,
        references: { model: 'classes', key: 'id' }, // tabela de turmas
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      sexo: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
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

  async down(queryInterface) {
    await queryInterface.dropTable('studentss');
  }
};
