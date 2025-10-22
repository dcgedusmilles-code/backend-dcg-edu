'use strict';
const { Candidato } = require('../../models');

class CandidatoRepository {
    async create(data) {
        return await Candidato.create(data);
    }

    async findAll() {
        return await Candidato.findAll();
    }

    async findById(id) {
        return await Candidato.findByPk(id, { include: ['processos'] });
    }

    async update(id, data) {
        const candidato = await Candidato.findByPk(id);
        if (!candidato) return null;
        return await candidato.update(data);
    }

    async delete(id) {
        const candidato = await Candidato.findByPk(id);
        if (!candidato) return null;
        await candidato.destroy();
        return candidato;
    }
}

module.exports = new CandidatoRepository();
