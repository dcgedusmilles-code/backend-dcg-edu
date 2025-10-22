'use strict';
const { Venda } = require('../../models');

class VendaRepository {
    async create(data) {
        return await Venda.create(data);
    }

    async findAll() {
        return await Venda.findAll({ include: ['cliente', 'produto', 'contrato', 'comissoes'] });
    }

    async findById(id) {
        return await Venda.findByPk(id, { include: ['cliente', 'produto', 'contrato', 'comissoes'] });
    }

    async update(id, data) {
        const venda = await Venda.findByPk(id);
        if (!venda) return null;
        return await venda.update(data);
    }

    async delete(id) {
        const venda = await Venda.findByPk(id);
        if (!venda) return null;
        await venda.destroy();
        return true;
    }
}

module.exports = new VendaRepository();
