const repository = require('../../repositories/infrastructure_and_logistics/heritage_repository');

class PatrimonioService {
    async getAll() {
        return await repository.findAll();
    }

    async getById(id) {
        const item = await repository.findById(id);
        if (!item) throw new Error('Patrimônio não encontrado');
        return item;
    }

    async create(data) {
        return await repository.create(data);
    }

    async update(id, data) {
        const updated = await repository.update(id, data);
        if (!updated) throw new Error('Patrimônio não encontrado');
        return updated;
    }

    async delete(id) {
        const deleted = await repository.delete(id);
        if (!deleted) throw new Error('Patrimônio não encontrado');
        return deleted;
    }
}

module.exports = new PatrimonioService();
