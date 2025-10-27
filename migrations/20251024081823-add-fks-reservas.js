'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    // FK: id_exemplar → copiess
    await queryInterface.addConstraint('reservas', {
      fields: ['id_exemplar'],
      type: 'foreign key',
      name: 'fk_reservas_copiess',
      references: {
        table: 'copiess',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // FK: id_usuario → users_librarys
    await queryInterface.addConstraint('reservas', {
      fields: ['id_usuario'],
      type: 'foreign key',
      name: 'fk_reservas_users_librarys',
      references: {
        table: 'users_librarys',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('reservas', 'fk_reservas_copiess');
    await queryInterface.removeConstraint('reservas', 'fk_reservas_users_librarys');
  }
};
