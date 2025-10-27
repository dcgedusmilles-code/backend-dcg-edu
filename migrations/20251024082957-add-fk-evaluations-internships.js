'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('evaluations_internships', {
      fields: ['id_estagio'],
      type: 'foreign key',
      name: 'fk_evaluations_internships_estagio', // nome único e padronizado
      references: {
        table: 'estagios',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('evaluations_internships', 'fk_evaluations_internships_estagio');
  }
};
