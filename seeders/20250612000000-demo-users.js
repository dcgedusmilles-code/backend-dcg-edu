'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Gerar hash da senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('123456', salt);

    // Data atual
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      {
        firstname: 'Admin',
        lastname: 'Sistema',
        email: 'admin@regizgrafica.com',
        mobile: '11999999999',
        password: hashedPassword,
        images: JSON.stringify([]),
        role: 'admin',
        isBlocked: false,
        cart: JSON.stringify([]),
        address: 'Rua Admin, 123 - São Paulo, SP',
        refreshToken: null,
        passwordChangedAt: now,
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: 'João',
        lastname: 'Silva',
        email: 'joao.silva@email.com',
        mobile: '11988888888',
        password: hashedPassword,
        images: JSON.stringify([]),
        role: 'user',
        isBlocked: false,
        cart: JSON.stringify([]),
        address: 'Rua das Flores, 456 - São Paulo, SP',
        refreshToken: null,
        passwordChangedAt: now,
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: 'Maria',
        lastname: 'Santos',
        email: 'maria.santos@email.com',
        mobile: '11977777777',
        password: hashedPassword,
        images: JSON.stringify([]),
        role: 'user',
        isBlocked: false,
        cart: JSON.stringify([]),
        address: 'Av. Paulista, 789 - São Paulo, SP',
        refreshToken: null,
        passwordChangedAt: now,
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: 'Pedro',
        lastname: 'Oliveira',
        email: 'pedro.oliveira@email.com',
        mobile: '11966666666',
        password: hashedPassword,
        images: JSON.stringify([]),
        role: 'user',
        isBlocked: false,
        cart: JSON.stringify([]),
        address: 'Rua Augusta, 321 - São Paulo, SP',
        refreshToken: null,
        passwordChangedAt: now,
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: 'Ana',
        lastname: 'Costa',
        email: 'ana.costa@email.com',
        mobile: '11955555555',
        password: hashedPassword,
        images: JSON.stringify([]),
        role: 'user',
        isBlocked: false,
        cart: JSON.stringify([]),
        address: 'Rua Oscar Freire, 654 - São Paulo, SP',
        refreshToken: null,
        passwordChangedAt: now,
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
}; 