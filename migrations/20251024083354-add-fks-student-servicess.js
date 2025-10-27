'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    // FK para tabela de estudantes
    await queryInterface.addConstraint('student_servicess', {
      fields: ['id_estudante'],
      type: 'foreign key',
      name: 'fk_student_servicess_estudante',
      references: {
        table: 'studentss',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // FK para funcionário responsável
    await queryInterface.addConstraint('student_servicess', {
      fields: ['responsavel'],
      type: 'foreign key',
      name: 'fk_student_servicess_funcionario',
      references: {
        table: 'employees',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('student_servicess', 'fk_student_servicess_estudante');
    await queryInterface.removeConstraint('student_servicess', 'fk_student_servicess_funcionario');
  }
};
