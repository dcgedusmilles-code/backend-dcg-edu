const repository = require('../../repositories/infrastructure_and_logistics/asset_security_repository');

class SegurancaPatrimonialService {
    async getAll() {
        return await repository.findAll();
    }

    async getById(id) {
        const item = await repository.findById(id);
        if (!item) throw new Error('Registro não encontrado');
        return item;
    }

    async create(data) {
        return await repository.create(data);
    }

    async update(id, data) {
        const updated = await repository.update(id, data);
        if (!updated) throw new Error('Registro não encontrado');
        return updated;
    }

    async delete(id) {
        const deleted = await repository.delete(id);
        if (!deleted) throw new Error('Registro não encontrado');
        return deleted;
    }
}

module.exports = new SegurancaPatrimonialService();
