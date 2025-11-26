"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    
    /** ------------------------------------------------------
     * 1. REMOVER QUALQUER FK EXISTENTE EM unidade_id
     * ----------------------------------------------------- */
    const [constraints] = await queryInterface.sequelize.query(`
      SELECT CONSTRAINT_NAME 
      FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
      WHERE TABLE_NAME = 'studentss'
        AND COLUMN_NAME = 'unidade_id'
        AND CONSTRAINT_SCHEMA = DATABASE()
        AND REFERENCED_TABLE_NAME IS NOT NULL;
    `);

    // Remove qualquer constraint encontrada
    for (const c of constraints) {
      await queryInterface.removeConstraint("studentss", c.CONSTRAINT_NAME)
        .catch(() => {});
    }

    /** ------------------------------------------------------
     * 2. AJUSTAR unidade_id (permitir null)
     * ----------------------------------------------------- */
    await queryInterface.changeColumn("studentss", "unidade_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    /** ------------------------------------------------------
     * 3. ADICIONAR A FK CORRETA
     * ----------------------------------------------------- */
    await queryInterface.addConstraint("studentss", {
      fields: ["unidade_id"],
      type: "foreign key",
      name: "fk_studentss_unidade_id",
      references: { table: "units", field: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    }).catch(() => {});

    /** ------------------------------------------------------
     * 4. CRIAR turma_id SE NÃO EXISTIR
     * ----------------------------------------------------- */
    const [turmaExists] = await queryInterface.sequelize.query(`
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = 'studentss'
        AND COLUMN_NAME = 'turma_id'
        AND TABLE_SCHEMA = DATABASE();
    `);

    if (turmaExists.length === 0) {
      await queryInterface.addColumn("studentss", "turma_id", {
        type: Sequelize.INTEGER,
        allowNull: true,
      });
    }

    /** ------------------------------------------------------
     * 5. REMOVER QUALQUER FK ANTIGA EM turma_id
     * ----------------------------------------------------- */
    const [turmaConstraints] = await queryInterface.sequelize.query(`
      SELECT CONSTRAINT_NAME 
      FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
      WHERE TABLE_NAME = 'studentss'
        AND COLUMN_NAME = 'turma_id'
        AND CONSTRAINT_SCHEMA = DATABASE()
        AND REFERENCED_TABLE_NAME IS NOT NULL;
    `);

    for (const c of turmaConstraints) {
      await queryInterface.removeConstraint("studentss", c.CONSTRAINT_NAME)
        .catch(() => {});
    }

    /** ------------------------------------------------------
     * 6. ADICIONAR FK DE turma_id
     * ----------------------------------------------------- */
    await queryInterface.addConstraint("studentss", {
      fields: ["turma_id"],
      type: "foreign key",
      name: "fk_studentss_turma_id",
      references: { table: "class_teachers", field: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    }).catch(() => {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("studentss", "fk_studentss_unidade_id").catch(()=>{});
    await queryInterface.removeConstraint("studentss", "fk_studentss_turma_id").catch(()=>{});
    await queryInterface.removeColumn("studentss", "turma_id").catch(()=>{});
  }
};
