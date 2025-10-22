const { MovimentacaoEstoque } = require('../../models');

class MovimentacaoEstoqueRepository {
    async create(data) {
        return await MovimentacaoEstoque.create(data);
    }

    async findAll() {
        return await MovimentacaoEstoque.findAll({ include: ['item', 'responsavel_info'] });
    }

    async findById(id) {
        return await MovimentacaoEstoque.findByPk(id, { include: ['item', 'responsavel_info'] });
    }

    async update(id, data) {
        const registro = await this.findById(id);
        if (!registro) return null;
        return await registro.update(data);
    }

    async delete(id) {
        const registro = await this.findById(id);
        if (!registro) return null;
        await registro.destroy();
        return true;
    }
}

module.exports = new MovimentacaoEstoqueRepository();
