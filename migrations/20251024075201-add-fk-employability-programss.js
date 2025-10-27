'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('employability_programss', {
      fields: ['parceiro'],
      type: 'foreign key',
      name: 'fk_employability_programss_partner_company',
      references: {
        table: 'partner_companiess',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('employability_programss', 'fk_employability_programss_partner_company');
  }
};
