const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '../models');

fs.readdirSync(modelsDir).forEach(file => {
    if (file.endsWith('.js') && file !== 'index.js') {
        const filePath = path.join(modelsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // 🔍 Descobrir o nome da tabela (baseado no modelName)
        const match = content.match(/modelName:\s*['"](\w+)['"]/);
        if (!match) return;

        const modelName = match[1];
        const tableName = modelName
            .replace(/([a-z])([A-Z])/g, '$1_$2') // camelCase → snake_case
            .toLowerCase() + 's'; // plural básico

        // ✅ Se já tiver tableName, timestamps ou underscored, não adiciona de novo
        if (!content.includes('tableName:')) {
            content = content.replace(
                /(\}\s*\)\s*;\s*return\s+\w+;)/,
                `    tableName: '${tableName}',\n    timestamps: true,\n    ,\n$1`
            );
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Atualizado: ${file}`);
    }
});

console.log('🚀 Todas as models foram ajustadas!');
