'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rua: Sequelize.STRING,
      numero: Sequelize.STRING,
      bairro: Sequelize.STRING,
      cidade: Sequelize.STRING,
      provincia: Sequelize.STRING,
      pais: Sequelize.STRING,
      complemento: Sequelize.STRING,
      cep: Sequelize.STRING,
      coordenadas_latitude: Sequelize.STRING,
      coordenadas_longitude: Sequelize.STRING,
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('addresses');
  }
};
