'use strict';
const relacaoPublicaRepository = require('../../repositories/communication_and_marketing/public_relations_repository');

class RelacaoPublicaService {
    async create(data) {
        return await relacaoPublicaRepository.create(data);
    }

    async getAll() {
        return await relacaoPublicaRepository.findAll();
    }

    async getById(id) {
        return await relacaoPublicaRepository.findById(id);
    }

    async update(id, data) {
        return await relacaoPublicaRepository.update(id, data);
    }

    async delete(id) {
        return await relacaoPublicaRepository.delete(id);
    }
}

module.exports = new RelacaoPublicaService();
