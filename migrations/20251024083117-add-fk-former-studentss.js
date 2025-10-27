'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('former_studentss', {
      fields: ['id_estudante'],
      type: 'foreign key',
      name: 'fk_former_studentss_estudante', // nome padronizado e único
      references: {
        table: 'studentss',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('former_studentss', 'fk_former_studentss_estudante');
  }
};
