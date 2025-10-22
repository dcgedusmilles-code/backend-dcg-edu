'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('positionss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        departamento_id: {
          type: Sequelize.INTEGER
        },
        salario_base: {
          type: Sequelize.FLOAT
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
    await queryInterface.dropTable('positionss');
  }
};