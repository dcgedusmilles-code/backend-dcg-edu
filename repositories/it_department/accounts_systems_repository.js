const { ContaSistema } = require('../../models');

class ContaSistemaRepository {
    async create(data) {
        return await ContaSistema.create(data);
    }

    async findAll() {
        return await ContaSistema.findAll({ include: ['usuario'] });
    }

    async findById(id) {
        return await ContaSistema.findByPk(id, { include: ['usuario'] });
    }

    async update(id, data) {
        const conta = await ContaSistema.findByPk(id);
        if (!conta) return null;
        return await conta.update(data);
    }

    async delete(id) {
        const conta = await ContaSistema.findByPk(id);
        if (!conta) return null;
        await conta.destroy();
        return true;
    }
}

module.exports = new ContaSistemaRepository();
