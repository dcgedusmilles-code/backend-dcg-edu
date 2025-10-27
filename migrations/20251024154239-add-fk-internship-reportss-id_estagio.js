'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('internship_reportss', {
      fields: ['id_estagio'],
      type: 'foreign key',
      name: 'fk_internship_reportss_estagio',
      references: {
        table: 'estagios', // tabela referenciada
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('internship_reportss', 'fk_internship_reportss_estagio');
  }
};
