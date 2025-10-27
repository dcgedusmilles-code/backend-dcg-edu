'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('heritages', {
      fields: ['localizacao'],
      type: 'foreign key',
      name: 'fk_heritages_locais', // nome da constraint
      references: {
        table: 'locals',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('heritages', 'fk_heritages_locais');
  }
};
