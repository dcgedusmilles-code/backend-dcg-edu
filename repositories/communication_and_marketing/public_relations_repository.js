'use strict';
const { RelacaoPublica } = require('../../models');

class RelacaoPublicaRepository {
    async create(data) {
        return await RelacaoPublica.create(data);
    }

    async findAll() {
        return await RelacaoPublica.findAll();
    }

    async findById(id) {
        return await RelacaoPublica.findByPk(id);
    }

    async update(id, data) {
        const rp = await RelacaoPublica.findByPk(id);
        if (!rp) return null;
        return await rp.update(data);
    }

    async delete(id) {
        const rp = await RelacaoPublica.findByPk(id);
        if (!rp) return null;
        await rp.destroy();
        return rp;
    }
}

module.exports = new RelacaoPublicaRepository();
