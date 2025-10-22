const recursoRepo = require('../../repositories/avaliacao_certicacao/assessment_resources_repository');

class RecursoAvaliacaoService {
    async getAll() {
        return await recursoRepo.findAll();
    }

    async getById(id) {
        return await recursoRepo.findById(id);
    }

    async create(data) {
        return await recursoRepo.create(data);
    }

    async update(id, data) {
        return await recursoRepo.update(id, data);
    }

    async delete(id) {
        return await recursoRepo.delete(id);
    }
}

module.exports = new RecursoAvaliacaoService();
