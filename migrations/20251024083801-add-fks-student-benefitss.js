'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('student_benefitss', {
      fields: ['id_estudante'],
      type: 'foreign key',
      name: 'fk_student_benefitss_estudante', // Nome padronizado da FK
      references: {
        table: 'studentss',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('student_benefitss', 'fk_student_benefitss_estudante');
  }
};
