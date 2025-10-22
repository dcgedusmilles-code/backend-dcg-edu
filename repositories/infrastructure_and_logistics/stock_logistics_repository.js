const { EstoqueLogistico } = require('../../models');

class EstoqueLogisticoRepository {
    async create(data) {
        return await EstoqueLogistico.create(data);
    }

    async findAll() {
        return await EstoqueLogistico.findAll({ include: ['local', 'movimentacoes'] });
    }

    async findById(id) {
        return await EstoqueLogistico.findByPk(id, { include: ['local', 'movimentacoes'] });
    }

    async update(id, data) {
        const item = await this.findById(id);
        if (!item) return null;
        return await item.update(data);
    }

    async delete(id) {
        const item = await this.findById(id);
        if (!item) return null;
        await item.destroy();
        return true;
    }
}

module.exports = new EstoqueLogisticoRepository();
