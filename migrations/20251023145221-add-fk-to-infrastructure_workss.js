'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // FK: local → locais.id
    await queryInterface.addConstraint('infrastructure_workss', {
      fields: ['local'],
      type: 'foreign key',
      name: 'fk_infrastructure_workss_locais',
      references: {
        table: 'locals',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    // FK: fornecedor → fornecedors.id
    await queryInterface.addConstraint('infrastructure_workss', {
      fields: ['fornecedor'],
      type: 'foreign key',
      name: 'fk_infrastructure_workss_fornecedors',
      references: {
        table: 'fornecedors',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('infrastructure_workss', 'fk_infrastructure_workss_locais');
    await queryInterface.removeConstraint('infrastructure_workss', 'fk_infrastructure_workss_fornecedors');
  }
};
