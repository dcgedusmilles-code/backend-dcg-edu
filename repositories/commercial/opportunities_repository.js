'use strict';
const { Oportunidade } = require('../../models');

class OportunidadeRepository {
    async create(data) {
        return await Oportunidade.create(data);
    }

    async findAll() {
        return await Oportunidade.findAll({ include: ['lead', 'responsavel', 'propostas'] });
    }

    async findById(id) {
        return await Oportunidade.findByPk(id, { include: ['lead', 'responsavel', 'propostas'] });
    }

    async update(id, data) {
        const oportunidade = await Oportunidade.findByPk(id);
        if (!oportunidade) return null;
        return await oportunidade.update(data);
    }

    async delete(id) {
        const oportunidade = await Oportunidade.findByPk(id);
        if (!oportunidade) return null;
        await oportunidade.destroy();
        return true;
    }
}

module.exports = new OportunidadeRepository();
