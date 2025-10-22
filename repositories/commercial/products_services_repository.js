'use strict';
const { ProdutoServico } = require('../../models');

class ProdutoServicoRepository {
    async create(data) {
        return await ProdutoServico.create(data);
    }

    async findAll() {
        return await ProdutoServico.findAll({ include: ['vendas'] });
    }

    async findById(id) {
        return await ProdutoServico.findByPk(id, { include: ['vendas'] });
    }

    async update(id, data) {
        const produto = await ProdutoServico.findByPk(id);
        if (!produto) return null;
        return await produto.update(data);
    }

    async delete(id) {
        const produto = await ProdutoServico.findByPk(id);
        if (!produto) return null;
        await produto.destroy();
        return true;
    }
}

module.exports = new ProdutoServicoRepository();
