const localRepository = require('../../repositories/infrastructure_and_logistics/locations_repository');

class LocalService {
    async getAll() {
        return await localRepository.findAll();
    }

    async getById(id) {
        const local = await localRepository.findById(id);
        if (!local) throw new Error('Local não encontrado');
        return local;
    }

    async create(data) {
        return await localRepository.create(data);
    }

    async update(id, data) {
        const updated = await localRepository.update(id, data);
        if (!updated) throw new Error('Local não encontrado para atualização');
        return updated;
    }

    async delete(id) {
        const deleted = await localRepository.delete(id);
        if (!deleted) throw new Error('Local não encontrado para exclusão');
        return deleted;
    }
}

module.exports = new LocalService();
