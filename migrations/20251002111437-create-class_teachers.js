'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('class_teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome: {
          type: Sequelize.STRING
        },
        ano: {
          type: Sequelize.INTEGER
        },
        semestre: {
          type: Sequelize.INTEGER
        },
        curso_id: {
          type: Sequelize.INTEGER
        },
        coordenador_id: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('class_teachers');
  }
};