'use strict';
const oportunidadeRepository = require('../../repositories/commercial/opportunities_repository');

class OportunidadeService {
    async createOportunidade(data) {
        return await oportunidadeRepository.create(data);
    }

    async getAllOportunidades() {
        return await oportunidadeRepository.findAll();
    }

    async getOportunidadeById(id) {
        return await oportunidadeRepository.findById(id);
    }

    async updateOportunidade(id, data) {
        return await oportunidadeRepository.update(id, data);
    }

    async deleteOportunidade(id) {
        return await oportunidadeRepository.delete(id);
    }
}

module.exports = new OportunidadeService();
