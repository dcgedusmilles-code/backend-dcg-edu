'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('partnershipss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        nome_parceiro: {
          type: Sequelize.STRING
        },
        tipo: {
          type: Sequelize.STRING
        },
        contato: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.TEXT
        },
        beneficios_oferecidos: {
          type: Sequelize.TEXT
        },
        beneficios_recebidos: {
          type: Sequelize.TEXT
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
    await queryInterface.dropTable('partnershipss');
  }
};