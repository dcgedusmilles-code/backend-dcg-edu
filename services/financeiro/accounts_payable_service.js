'use strict';
const contaPagarRepository = require('../../repositories/financeiro/accounts_payable_repository');

class ContaPagarService {
    async create(data) {
        return await contaPagarRepository.create(data);
    }

    async getAll() {
        return await contaPagarRepository.findAll();
    }

    async getById(id) {
        return await contaPagarRepository.findById(id);
    }

    async update(id, data) {
        return await contaPagarRepository.update(id, data);
    }

    async delete(id) {
        return await contaPagarRepository.delete(id);
    }
}

module.exports = new ContaPagarService();
