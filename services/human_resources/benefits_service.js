'use strict';
const beneficioRepository = require('../../repositories/human_resources/benefits_repository');

class BeneficioService {
    async create(data) {
        return await beneficioRepository.create(data);
    }

    async getAll() {
        return await beneficioRepository.findAll();
    }

    async getById(id) {
        return await beneficioRepository.findById(id);
    }

    async update(id, data) {
        return await beneficioRepository.update(id, data);
    }

    async delete(id) {
        return await beneficioRepository.delete(id);
    }
}

module.exports = new BeneficioService();
