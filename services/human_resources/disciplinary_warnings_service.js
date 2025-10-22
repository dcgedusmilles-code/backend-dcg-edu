'use strict';
const advertenciaRepository = require('../../repositories/human_resources/disciplinary_warnings_repository');

class AdvertenciaDisciplinaService {
    async create(data) {
        return await advertenciaRepository.create(data);
    }

    async getAll() {
        return await advertenciaRepository.findAll();
    }

    async getById(id) {
        return await advertenciaRepository.findById(id);
    }

    async update(id, data) {
        return await advertenciaRepository.update(id, data);
    }

    async delete(id) {
        return await advertenciaRepository.delete(id);
    }
}

module.exports = new AdvertenciaDisciplinaService();
