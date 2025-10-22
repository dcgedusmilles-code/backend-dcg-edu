const { DocumentoAcademico } = require('../../models');

class DocumentoAcademicoRepository {
    async create(data) {
        return await DocumentoAcademico.create(data);
    }

    async findAll() {
        return await DocumentoAcademico.findAll({ include: ['aluno'] });
    }

    async findById(id) {
        return await DocumentoAcademico.findByPk(id, { include: ['aluno'] });
    }

    async update(id, data) {
        const doc = await DocumentoAcademico.findByPk(id);
        if (!doc) return null;
        return await doc.update(data);
    }

    async delete(id) {
        const doc = await DocumentoAcademico.findByPk(id);
        if (!doc) return null;
        await doc.destroy();
        return doc;
    }
}

module.exports = new DocumentoAcademicoRepository();
