'use strict';
const parceriaRepository = require('../../repositories/communication_and_marketing/partnerships_repository');

class ParceriaService {
    async create(data) {
        return await parceriaRepository.create(data);
    }

    async getAll() {
        return await parceriaRepository.findAll();
    }

    async getById(id) {
        return await parceriaRepository.findById(id);
    }

    async update(id, data) {
        return await parceriaRepository.update(id, data);
    }

    async delete(id) {
        return await parceriaRepository.delete(id);
    }
}

module.exports = new ParceriaService();
