const { AtivoTI } = require('../../models');

class AtivoTIRepository {
    async create(data) {
        return await AtivoTI.create(data);
    }

    async findAll() {
        return await AtivoTI.findAll({ include: ['suportes', 'manutencoes'] });
    }

    async findById(id) {
        return await AtivoTI.findByPk(id, { include: ['suportes', 'manutencoes'] });
    }

    async update(id, data) {
        const ativo = await AtivoTI.findByPk(id);
        if (!ativo) return null;
        return await ativo.update(data);
    }

    async delete(id) {
        const ativo = await AtivoTI.findByPk(id);
        if (!ativo) return null;
        await ativo.destroy();
        return true;
    }
}

module.exports = new AtivoTIRepository();
