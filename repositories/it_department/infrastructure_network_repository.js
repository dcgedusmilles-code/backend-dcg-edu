const { RedeInfraestrutura } = require('../../models');

class RedeInfraestruturaRepository {
    async create(data) {
        return await RedeInfraestrutura.create(data);
    }

    async findAll() {
        return await RedeInfraestrutura.findAll({ include: ['tecnico'] });
    }

    async findById(id) {
        return await RedeInfraestrutura.findByPk(id, { include: ['tecnico'] });
    }

    async update(id, data) {
        const registro = await RedeInfraestrutura.findByPk(id);
        if (!registro) return null;
        return await registro.update(data);
    }

    async delete(id) {
        const registro = await RedeInfraestrutura.findByPk(id);
        if (!registro) return null;
        await registro.destroy();
        return true;
    }
}

module.exports = new RedeInfraestruturaRepository();
