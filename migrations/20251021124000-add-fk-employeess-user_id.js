'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('employeess', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_employeess_user', // nome da FK
      references: {
        table: 'users',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('employeess', 'fk_employeess_user');
  }
};
