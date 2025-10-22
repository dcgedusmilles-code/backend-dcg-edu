const repository = require('../../repositories/human_resources/participation_in_training_repository');

class ParticipacaoTreinamentoService {
    async create(data) {
        return await repository.create(data);
    }

    async getAll() {
        return await repository.findAll();
    }

    async getById(id) {
        return await repository.findById(id);
    }

    async update(id, data) {
        return await repository.update(id, data);
    }

    async delete(id) {
        return await repository.delete(id);
    }
}

module.exports = new ParticipacaoTreinamentoService();
