'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('proposta_comercials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id_cliente: {
          type: Sequelize.INTEGER
        },
        id_oportunidade: {
          type: Sequelize.INTEGER
        },
        descricao: {
          type: Sequelize.TEXT
        },
        valor_proposta: {
          type: Sequelize.FLOAT
        },
        status: {
          type: Sequelize.STRING
        },
        data_envio: {
          type: Sequelize.DATE
        },
        data_resposta: {
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
    await queryInterface.dropTable('proposta_comercials');
  }
};