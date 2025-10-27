'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    // FK para empréstimos
    await queryInterface.addConstraint('finess', {
      fields: ['id_emprestimo'],
      type: 'foreign key',
      name: 'fk_finess_loanss',
      references: {
        table: 'loanss',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // FK para usuários da biblioteca
    await queryInterface.addConstraint('finess', {
      fields: ['id_usuario'],
      type: 'foreign key',
      name: 'fk_finess_users_librarys',
      references: {
        table: 'users_librarys',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    // FK para alunos
    await queryInterface.addConstraint('finess', {
      fields: ['aluno_id'],
      type: 'foreign key',
      name: 'fk_finess_alunos',
      references: {
        table: 'alunos',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('finess', 'fk_finess_loanss');
    await queryInterface.removeConstraint('finess', 'fk_finess_users_librarys');
    await queryInterface.removeConstraint('finess', 'fk_finess_alunos');
  }
};
