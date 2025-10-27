'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // FK para transportes
    await queryInterface.addConstraint('appointments_transportations', {
      fields: ['id_transporte'],
      type: 'foreign key',
      name: 'fk_appointments_transportations_transportes',
      references: {
        table: 'transportes',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    // FK para funcionarios
    await queryInterface.addConstraint('appointments_transportations', {
      fields: ['motorista'],
      type: 'foreign key',
      name: 'fk_appointments_transportations_funcionarios',
      references: {
        table: 'employeess',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('appointments_transportations', 'fk_appointments_transportations_transportes');
    await queryInterface.removeConstraint('appointments_transportations', 'fk_appointments_transportations_funcionarios');
  }
};
