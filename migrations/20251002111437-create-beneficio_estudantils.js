'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('beneficio_estudantils', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_estudante: {
          type: Sequelize.INTEGER
        },
        tipo: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        status: {
          type: Sequelize.STRING
        },
        data_inicio: {
          type: Sequelize.DATE
        },
        data_fim: {
          type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('beneficio_estudantils');
  }
};