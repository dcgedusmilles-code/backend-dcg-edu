'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    // FK: aluno_id → students
    await queryInterface.addConstraint('student_in_charges', {
      fields: ['aluno_id'],
      type: 'foreign key',
      name: 'fk_student_in_charges_aluno',
      references: {
        table: 'studentss',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // FK: encarregado_id → guardians
    await queryInterface.addConstraint('student_in_charges', {
      fields: ['encarregado_id'],
      type: 'foreign key',
      name: 'fk_student_in_charges_encarregado',
      references: {
        table: 'student_in_charges',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('student_in_charges', 'fk_student_in_charges_aluno');
    await queryInterface.removeConstraint('student_in_charges', 'fk_student_in_charges_encarregado');
  }
};
