'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // FK: id_vaga → vacancies_internships(id)
    await queryInterface.addConstraint('applications_internshipss', {
      fields: ['id_vaga'],
      type: 'foreign key',
      name: 'fk_applications_internshipss_vaga',
      references: {
        table: 'vacancies_internships', // ⚠️ nome exato da tabela de vagas
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // FK: id_estudante → students(id)
    await queryInterface.addConstraint('applications_internshipss', {
      fields: ['id_estudante'],
      type: 'foreign key',
      name: 'fk_applications_internshipss_estudante',
      references: {
        table: 'studentss',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('applications_internshipss', 'fk_applications_internshipss_vaga');
    await queryInterface.removeConstraint('applications_internshipss', 'fk_applications_internshipss_estudante');
  }
};
