/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '../models');
const migrationsDir = path.join(__dirname, '../migrations');

// 🔹 Garante a pasta migrations
if (!fs.existsSync(migrationsDir)) {
    fs.mkdirSync(migrationsDir);
}

// 🔹 Função recursiva para buscar models
function getModels(dir) {
    let models = [];
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            models = models.concat(getModels(fullPath));
        } else if (
            file.endsWith('.js') &&
            file !== 'index.js' &&
            !file.endsWith('.test.js')
        ) {
            models.push(fullPath);
        }
    });
    return models;
}

const models = getModels(modelsDir);

console.log(`📦 Encontrados ${models.length} models.`);
console.log(models);

// 🔹 Função para gerar migrations consistentes com o tableName do model
function generateMigration(modelFile) {
    const content = fs.readFileSync(modelFile, 'utf8');

    // pega o modelName e o tableName
    const modelMatch = content.match(/modelName:\s*['"](\w+)['"]/);
    const tableMatch = content.match(/tableName:\s*['"]([\w_]+)['"]/);

    if (!modelMatch || !tableMatch) {
        console.warn(`⚠️  Model sem modelName/tableName: ${modelFile}`);
        return;
    }

    const modelName = modelMatch[1];
    const tableName = tableMatch[1];

    const timestamp = Date.now();
    const migrationName = `${timestamp}-create-${tableName}.js`;
    const migrationFile = path.join(migrationsDir, migrationName);

    const migrationTemplate = `'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('${tableName}', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('${tableName}');
  }
};
`;

    fs.writeFileSync(migrationFile, migrationTemplate, 'utf8');
    console.log(`✅ Migration criada: ${migrationFile}`);
}

// 🔹 Percorrer models
models.forEach(modelFile => {
    generateMigration(modelFile);
});

console.log('🎉 Finalizado!');
