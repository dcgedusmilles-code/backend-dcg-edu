'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('acquisition_suggestionss', {
      fields: ['id_usuario'],
      type: 'foreign key',
      name: 'fk_acquisition_suggestionss_usuario', // nome único da constraint
      references: {
        table: 'users_librarys',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('acquisition_suggestionss', 'fk_acquisition_suggestionss_usuario');
  }
};
