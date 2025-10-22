'use strict';
const { AdvertenciaDisciplina } = require('../../models');

class AdvertenciaDisciplinaRepository {
    async create(data) {
        return await AdvertenciaDisciplina.create(data);
    }

    async findAll() {
        return await AdvertenciaDisciplina.findAll({ include: ['funcionario'] });
    }

    async findById(id) {
        return await AdvertenciaDisciplina.findByPk(id, { include: ['funcionario'] });
    }

    async update(id, data) {
        const advertencia = await AdvertenciaDisciplina.findByPk(id);
        if (!advertencia) return null;
        return await advertencia.update(data);
    }

    async delete(id) {
        const advertencia = await AdvertenciaDisciplina.findByPk(id);
        if (!advertencia) return null;
        await advertencia.destroy();
        return advertencia;
    }
}

module.exports = new AdvertenciaDisciplinaRepository();
