const repo = require('../../repositories/secretaria_academica/academic_records_repository');

class HistoricoAcademicoService {
    async create(data) {
        return await repo.create(data);
    }

    async getAll() {
        return await repo.findAll();
    }

    async getById(id) {
        const record = await repo.findById(id);
        if (!record) throw new Error('Histórico acadêmico não encontrado');
        return record;
    }

    async update(id, data) {
        const updated = await repo.update(id, data);
        if (!updated) throw new Error('Histórico acadêmico não encontrado');
        return updated;
    }

    async delete(id) {
        const deleted = await repo.delete(id);
        if (!deleted) throw new Error('Histórico acadêmico não encontrado');
        return deleted;
    }
}

module.exports = new HistoricoAcademicoService();
