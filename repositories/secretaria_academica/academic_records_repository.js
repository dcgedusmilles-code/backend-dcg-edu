const { HistoricoAcademico } = require('../../models');

class HistoricoAcademicoRepository {
    async create(data) {
        return await HistoricoAcademico.create(data);
    }

    async findAll() {
        return await HistoricoAcademico.findAll({ include: ['aluno', 'disciplina'] });
    }

    async findById(id) {
        return await HistoricoAcademico.findByPk(id, { include: ['aluno', 'disciplina'] });
    }

    async update(id, data) {
        const record = await HistoricoAcademico.findByPk(id);
        if (!record) return null;
        return await record.update(data);
    }

    async delete(id) {
        const record = await HistoricoAcademico.findByPk(id);
        if (!record) return null;
        await record.destroy();
        return record;
    }
}

module.exports = new HistoricoAcademicoRepository();
