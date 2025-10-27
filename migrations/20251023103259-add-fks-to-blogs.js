'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('blogs', {
      fields: ['autor_id'],
      type: 'foreign key',
      name: 'fk_blogs_funcionarios',
      references: { table: 'employeess', field: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('blogs', {
      fields: ['category_id'],
      type: 'foreign key',
      name: 'fk_blogs_blogcategories',
      references: { table: 'blogcategories', field: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('blogs', 'fk_blogs_funcionarios');
    await queryInterface.removeConstraint('blogs', 'fk_blogs_blogcategories');
  }
};
