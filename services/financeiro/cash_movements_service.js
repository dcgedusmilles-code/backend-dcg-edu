'use strict';
const caixaMovimentoRepository = require('../../repositories/financeiro/cash_movements_repository');

class CaixaMovimentoService {
    async create(data) {
        return await caixaMovimentoRepository.create(data);
    }

    async getAll() {
        return await caixaMovimentoRepository.findAll();
    }

    async getById(id) {
        return await caixaMovimentoRepository.findById(id);
    }

    async update(id, data) {
        return await caixaMovimentoRepository.update(id, data);
    }

    async delete(id) {
        return await caixaMovimentoRepository.delete(id);
    }
}

module.exports = new CaixaMovimentoService();
