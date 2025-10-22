const { CanalDivulgacao, Campanha } = require('../../models');

class CanalDivulgacaoRepository {
    async create(data) {
        return await CanalDivulgacao.create(data);
    }

    async findAll() {
        return await CanalDivulgacao.findAll({
            include: [{ model: Campanha, as: 'campanhas' }]
        });
    }

    async findById(id) {
        return await CanalDivulgacao.findByPk(id, {
            include: [{ model: Campanha, as: 'campanhas' }]
        });
    }

    async update(id, data) {
        const canal = await CanalDivulgacao.findByPk(id);
        if (!canal) return null;
        return await canal.update(data);
    }

    async delete(id) {
        return await CanalDivulgacao.destroy({ where: { id } });
    }
}

module.exports = new CanalDivulgacaoRepository();
