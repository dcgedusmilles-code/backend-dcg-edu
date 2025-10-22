'use strict';
const vendaRepository = require('../../repositories/commercial/sales_repository');

class VendaService {
    async createVenda(data) {
        return await vendaRepository.create(data);
    }

    async getAllVendas() {
        return await vendaRepository.findAll();
    }

    async getVendaById(id) {
        return await vendaRepository.findById(id);
    }

    async updateVenda(id, data) {
        return await vendaRepository.update(id, data);
    }

    async deleteVenda(id) {
        return await vendaRepository.delete(id);
    }
}

module.exports = new VendaService();
