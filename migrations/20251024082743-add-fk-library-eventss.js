'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('library_eventss', {
      fields: ['responsavel'],
      type: 'foreign key',
      name: 'fk_library_eventss_funcionarios',
      references: {
        table: 'employeess',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('library_eventss', 'fk_library_eventss_funcionarios');
  }
};
