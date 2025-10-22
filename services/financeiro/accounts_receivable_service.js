'use strict';
const contaReceberRepository = require('../../repositories/financeiro/accounts_receivable_repository');

class ContaReceberService {
    async create(data) {
        return await contaReceberRepository.create(data);
    }

    async getAll() {
        return await contaReceberRepository.findAll();
    }

    async getById(id) {
        return await contaReceberRepository.findById(id);
    }

    async update(id, data) {
        return await contaReceberRepository.update(id, data);
    }

    async delete(id) {
        return await contaReceberRepository.delete(id);
    }
}

module.exports = new ContaReceberService();
