const { AvaliacaoDesempenho } = require('../../models');

class AvaliacaoDesempenhoRepository {
    async create(data) {
        return await AvaliacaoDesempenho.create(data);
    }

    async findAll() {
        return await AvaliacaoDesempenho.findAll({ include: ['funcionario'] });
    }

    async findById(id) {
        return await AvaliacaoDesempenho.findByPk(id, { include: ['funcionario'] });
    }

    async update(id, data) {
        const record = await AvaliacaoDesempenho.findByPk(id);
        if (!record) return null;
        return await record.update(data);
    }

    async delete(id) {
        const record = await AvaliacaoDesempenho.findByPk(id);
        if (!record) return null;
        await record.destroy();
        return true;
    }
}

module.exports = new AvaliacaoDesempenhoRepository();
