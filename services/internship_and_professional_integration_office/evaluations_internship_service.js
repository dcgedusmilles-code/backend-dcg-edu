const AvaliacaoEstagioRepository = require('../../repositories/internship_and_professional_integration_office/evaluations_internship_repository');

class AvaliacaoEstagioService {
    async create(data) {
        if (!data.id_estagio || !data.avaliador)
            throw new Error('Campos obrigatórios: id_estagio e avaliador');
        return await AvaliacaoEstagioRepository.create(data);
    }

    async findAll() {
        return await AvaliacaoEstagioRepository.findAll();
    }

    async findById(id) {
        return await AvaliacaoEstagioRepository.findById(id);
    }

    async update(id, data) {
        return await AvaliacaoEstagioRepository.update(id, data);
    }

    async delete(id) {
        return await AvaliacaoEstagioRepository.delete(id);
    }
}

module.exports = new AvaliacaoEstagioService();
