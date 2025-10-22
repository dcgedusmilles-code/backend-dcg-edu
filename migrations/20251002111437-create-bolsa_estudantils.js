'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bolsa_estudantils', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome_bolsa: {
          type: Sequelize.STRING
        },
        tipo: {
          type: Sequelize.STRING
        },
        criterios: {
          type: Sequelize.TEXT
        },
        valor: {
          type: Sequelize.FLOAT
        },
        periodo: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bolsa_estudantils');
  }
};