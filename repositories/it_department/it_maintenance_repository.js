const { ManutencaoTI } = require('../../models');

class ManutencaoTIRepository {
    async create(data) {
        return await ManutencaoTI.create(data);
    }

    async findAll() {
        return await ManutencaoTI.findAll({ include: ['ativo', 'tecnico'] });
    }

    async findById(id) {
        return await ManutencaoTI.findByPk(id, { include: ['ativo', 'tecnico'] });
    }

    async update(id, data) {
        const manutencao = await ManutencaoTI.findByPk(id);
        if (!manutencao) return null;
        return await manutencao.update(data);
    }

    async delete(id) {
        const manutencao = await ManutencaoTI.findByPk(id);
        if (!manutencao) return null;
        await manutencao.destroy();
        return true;
    }
}

module.exports = new ManutencaoTIRepository();
