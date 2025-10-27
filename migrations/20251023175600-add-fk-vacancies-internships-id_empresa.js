'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('vacancies_internships', {
      fields: ['id_empresa'],
      type: 'foreign key',
      name: 'fk_vacancies_internships_empresa', // nome único
      references: {
        table: 'partner_companiess',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('vacancies_internships', 'fk_vacancies_internships_empresa');
  }
};
