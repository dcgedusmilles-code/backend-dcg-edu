'use strict';
const { CaixaMovimento } = require('../../models');

class CaixaMovimentoRepository {
    async create(data) {
        return await CaixaMovimento.create(data);
    }

    async findAll() {
        return await CaixaMovimento.findAll();
    }

    async findById(id) {
        return await CaixaMovimento.findByPk(id);
    }

    async update(id, data) {
        const movimento = await CaixaMovimento.findByPk(id);
        if (!movimento) return null;
        return await movimento.update(data);
    }

    async delete(id) {
        const movimento = await CaixaMovimento.findByPk(id);
        if (!movimento) return null;
        await movimento.destroy();
        return movimento;
    }
}

module.exports = new CaixaMovimentoRepository();
