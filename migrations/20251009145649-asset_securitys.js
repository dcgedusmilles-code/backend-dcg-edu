'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('asset_securitys', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      tipo: Sequelize.STRING,
      descricao: Sequelize.TEXT,
      local: Sequelize.INTEGER,
      data_registro: Sequelize.DATE,
      responsavel: Sequelize.INTEGER,
      status: Sequelize.STRING,
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('asset_securitys');
  }
};
