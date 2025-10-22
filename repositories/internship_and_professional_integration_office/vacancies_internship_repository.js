const { VagaEstagio } = require('../../models');

class VagaEstagioRepository {
    async create(data) {
        return await VagaEstagio.create(data);
    }

    async findAll() {
        return await VagaEstagio.findAll({ include: ['empresa', 'candidaturas'] });
    }

    async findById(id) {
        return await VagaEstagio.findByPk(id, { include: ['empresa', 'candidaturas'] });
    }

    async update(id, data) {
        const vaga = await VagaEstagio.findByPk(id);
        if (!vaga) return null;
        return await vaga.update(data);
    }

    async delete(id) {
        const vaga = await VagaEstagio.findByPk(id);
        if (!vaga) return null;
        await vaga.destroy();
        return true;
    }
}

module.exports = new VagaEstagioRepository();
