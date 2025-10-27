'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('copiess', {
      fields: ['id_item'],
      type: 'foreign key',
      name: 'fk_copiess_acervos', // nome único da constraint
      references: {
        table: 'acervos', // tabela referenciada
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('copiess', 'fk_copiess_acervos');
  }
};
