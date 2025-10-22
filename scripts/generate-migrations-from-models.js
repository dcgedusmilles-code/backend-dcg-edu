/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '../models');
const migrationsDir = path.join(__dirname, '../migrations');

// Garante a pasta migrations
if (!fs.existsSync(migrationsDir)) {
    fs.mkdirSync(migrationsDir);
}

// Função recursiva para buscar models
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

// Extrair atributos definidos no Model.init
function extractAttributes(content) {
    const initMatch = content.match(/\.init\s*\(\s*{([\s\S]*?)}\s*,/);
    if (!initMatch) return {};

    const attrs = {};
    const lines = initMatch[1].split('\n').map(l => l.trim()).filter(Boolean);

    lines.forEach(line => {
        const [key, rest] = line.split(':').map(l => l.trim());
        if (!key || !rest) return;

        let type = 'Sequelize.STRING';
        if (/INTEGER/.test(rest)) type = 'Sequelize.INTEGER';
        if (/FLOAT/.test(rest)) type = 'Sequelize.FLOAT';
        if (/DATE/.test(rest)) type = 'Sequelize.DATE';
        if (/TEXT/.test(rest)) type = 'Sequelize.TEXT';
        if (/BOOLEAN/.test(rest)) type = 'Sequelize.BOOLEAN';
        if (/JSON/.test(rest)) type = 'Sequelize.JSON';

        attrs[key] = type.replace(/,$/, '');
    });

    return attrs;
}

// Extrair tableName do model (se existir)
function extractTableName(content, modelFile) {
    const tableMatch = content.match(/tableName:\s*['"]([\w_]+)['"]/);
    if (tableMatch) return tableMatch[1];

    // fallback → nome do arquivo + "s"
    const modelName = path.basename(modelFile, '.js');
    return modelName.toLowerCase() + 's';
}

// Criar migration a partir do model
function generateMigration(modelFile) {
    const content = fs.readFileSync(modelFile, 'utf-8');
    const attrs = extractAttributes(content);
    const tableName = extractTableName(content, modelFile);

    const timestamp = new Date()
        .toISOString()
        .replace(/[-:TZ.]/g, '')
        .slice(0, 14);

    const migrationFile = `${timestamp}-create-${tableName}.js`;
    const migrationPath = path.join(migrationsDir, migrationFile);

    let fields = '';
    Object.entries(attrs).forEach(([name, type]) => {
        fields += `        ${name}: {\n          type: ${type}\n        },\n`;
    });

    const migrationTemplate = `'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('${tableName}', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
${fields}        createdAt: {
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
};`;

    fs.writeFileSync(migrationPath, migrationTemplate, 'utf-8');
    console.log(`✅ Migration criada: ${migrationFile}`);
}

// Processar todos os models
const models = getModels(modelsDir);
models.forEach(generateMigration);

console.log(`🎉 ${models.length} migrations geradas com sucesso!`);
