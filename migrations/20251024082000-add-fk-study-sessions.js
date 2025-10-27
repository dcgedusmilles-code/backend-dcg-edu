'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    // FK: id_usuario → users_librarys
    await queryInterface.addConstraint('study_sessions', {
      fields: ['id_usuario'],
      type: 'foreign key',
      name: 'fk_study_sessions_users_librarys',
      references: {
        table: 'users_librarys',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('study_sessions', 'fk_study_sessions_users_librarys');
  }
};
