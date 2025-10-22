'use strict';
const { ContaReceber } = require('../../models');

class ContaReceberRepository {
    async create(data) {
        return await ContaReceber.create(data);
    }

    async findAll() {
        return await ContaReceber.findAll();
    }

    async findById(id) {
        return await ContaReceber.findByPk(id);
    }

    async update(id, data) {
        const conta = await ContaReceber.findByPk(id);
        if (!conta) return null;
        return await conta.update(data);
    }

    async delete(id) {
        const conta = await ContaReceber.findByPk(id);
        if (!conta) return null;
        await conta.destroy();
        return conta;
    }
}

module.exports = new ContaReceberRepository();
