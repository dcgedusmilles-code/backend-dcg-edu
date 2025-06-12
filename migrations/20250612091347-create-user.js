'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      firstname: { type: Sequelize.STRING, allowNull: false },
      lastname: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      mobile: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      images: { type: Sequelize.JSON, defaultValue: [] },
      role: { type: Sequelize.STRING, defaultValue: 'user' },
      isBlocked: { type: Sequelize.BOOLEAN, defaultValue: false },
      cart: { type: Sequelize.JSON, defaultValue: [] },
      address: { type: Sequelize.STRING },
      refreshToken: { type: Sequelize.STRING },
      passwordChangedAt: { type: Sequelize.DATE },
      passwordResetToken: { type: Sequelize.STRING },
      passwordResetExpires: { type: Sequelize.DATE },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};