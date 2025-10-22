'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('it_securitys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        descricao: {
          type: Sequelize.TEXT
        },
        tipo: {
          type: Sequelize.STRING
        },
        responsavel: {
          type: Sequelize.INTEGER
        },
        data_implementacao: {
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
    await queryInterface.dropTable('it_securitys');
  }
};