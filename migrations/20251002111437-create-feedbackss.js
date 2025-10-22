'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('feedbackss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        avaliacao_id: {
          type: Sequelize.INTEGER
        },
        participante_id: {
          type: Sequelize.INTEGER
        },
        curso_id: {
          type: Sequelize.INTEGER
        },
        instrutor_id: {
          type: Sequelize.INTEGER
        },
        comentario: {
          type: Sequelize.TEXT
        },
        nota: {
          type: Sequelize.INTEGER
        },
        data: {
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
    await queryInterface.dropTable('feedbackss');
  }
};