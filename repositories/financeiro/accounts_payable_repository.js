'use strict';
const { ContaPagar } = require('../../models');

class ContaPagarRepository {
    async create(data) {
        return await ContaPagar.create(data);
    }

    async findAll() {
        return await ContaPagar.findAll({ include: ['fornecedor'] });
    }

    async findById(id) {
        return await ContaPagar.findByPk(id, { include: ['fornecedor'] });
    }

    async update(id, data) {
        const conta = await ContaPagar.findByPk(id);
        if (!conta) return null;
        return await conta.update(data);
    }

    async delete(id) {
        const conta = await ContaPagar.findByPk(id);
        if (!conta) return null;
        await conta.destroy();
        return conta;
    }
}

module.exports = new ContaPagarRepository();
