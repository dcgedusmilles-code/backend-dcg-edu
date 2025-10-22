'use strict';
const candidatoRepository = require('../../repositories/human_resources/candidates_repository');

class CandidatoService {
    async create(data) {
        return await candidatoRepository.create(data);
    }

    async getAll() {
        return await candidatoRepository.findAll();
    }

    async getById(id) {
        return await candidatoRepository.findById(id);
    }

    async update(id, data) {
        return await candidatoRepository.update(id, data);
    }

    async delete(id) {
        return await candidatoRepository.delete(id);
    }
}

module.exports = new CandidatoService();
