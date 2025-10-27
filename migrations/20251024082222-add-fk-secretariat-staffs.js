'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    // FK: secretaria_id → academic_secretariats
    await queryInterface.addConstraint('secretariat_staffs', {
      fields: ['secretaria_id'],
      type: 'foreign key',
      name: 'fk_secretariat_staffs_secretaria',
      references: {
        table: 'secretariat_staffs',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // FK: funcionario_id → employees
    await queryInterface.addConstraint('secretariat_staffs', {
      fields: ['funcionario_id'],
      type: 'foreign key',
      name: 'fk_secretariat_staffs_funcionario',
      references: {
        table: 'employeess',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('secretariat_staffs', 'fk_secretariat_staffs_secretaria');
    await queryInterface.removeConstraint('secretariat_staffs', 'fk_secretariat_staffs_funcionario');
  }
};
