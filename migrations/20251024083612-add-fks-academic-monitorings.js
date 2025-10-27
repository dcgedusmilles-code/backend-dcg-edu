'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('academic_monitorings', {
      fields: ['id_estudante'],
      type: 'foreign key',
      name: 'fk_academic_monitorings_estudante',
      references: {
        table: 'studentss',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('academic_monitorings', 'fk_academic_monitorings_estudante');
  }
};
