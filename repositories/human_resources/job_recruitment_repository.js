const { RecrutamentoVaga } = require('../../models');

class RecrutamentoVagaRepository {
    async create(data) {
        return await RecrutamentoVaga.create(data);
    }

    async findAll() {
        return await RecrutamentoVaga.findAll({ include: ['processos'] });
    }

    async findById(id) {
        return await RecrutamentoVaga.findByPk(id, { include: ['processos'] });
    }

    async update(id, data) {
        const vaga = await RecrutamentoVaga.findByPk(id);
        if (!vaga) return null;
        return await vaga.update(data);
    }

    async delete(id) {
        const vaga = await RecrutamentoVaga.findByPk(id);
        if (!vaga) return null;
        await vaga.destroy();
        return vaga;
    }
}

module.exports = new RecrutamentoVagaRepository();
