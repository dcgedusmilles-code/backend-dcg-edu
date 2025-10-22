const { FolhaPagamento } = require('../../models');

class FolhaPagamentoRepository {
    async create(data) {
        return await FolhaPagamento.create(data);
    }

    async findAll() {
        return await FolhaPagamento.findAll({ include: ['funcionario'] });
    }

    async findById(id) {
        return await FolhaPagamento.findByPk(id, { include: ['funcionario'] });
    }

    async update(id, data) {
        const folha = await FolhaPagamento.findByPk(id);
        if (!folha) return null;
        return await folha.update(data);
    }

    async delete(id) {
        const folha = await FolhaPagamento.findByPk(id);
        if (!folha) return null;
        await folha.destroy();
        return folha;
    }
}

module.exports = new FolhaPagamentoRepository();
