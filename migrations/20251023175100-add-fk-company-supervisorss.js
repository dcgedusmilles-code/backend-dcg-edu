'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('company_supervisorss', {
      fields: ['id_empresa'],
      type: 'foreign key',
      name: 'fk_company_supervisorss_empresa', // nome da FK
      references: {
        table: 'partner_companiess', // tabela referenciada
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('company_supervisorss', 'fk_company_supervisorss_empresa');
  }
};
