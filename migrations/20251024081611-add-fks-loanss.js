'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    // FK: id_exemplar → copiess
    await queryInterface.addConstraint('loanss', {
      fields: ['id_exemplar'],
      type: 'foreign key',
      name: 'fk_loanss_copiess',
      references: {
        table: 'copiess',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // FK: id_usuario → users_librarys
    await queryInterface.addConstraint('loanss', {
      fields: ['id_usuario'],
      type: 'foreign key',
      name: 'fk_loanss_users_librarys',
      references: {
        table: 'users_librarys',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('loanss', 'fk_loanss_copiess');
    await queryInterface.removeConstraint('loanss', 'fk_loanss_users_librarys');
  }
};
