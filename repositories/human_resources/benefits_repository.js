'use strict';
const { Beneficio } = require('../../models');

class BeneficioRepository {
    async create(data) {
        return await Beneficio.create(data);
    }

    async findAll() {
        return await Beneficio.findAll();
    }

    async findById(id) {
        return await Beneficio.findByPk(id, { include: ['funcionarios'] });
    }

    async update(id, data) {
        const beneficio = await Beneficio.findByPk(id);
        if (!beneficio) return null;
        return await beneficio.update(data);
    }

    async delete(id) {
        const beneficio = await Beneficio.findByPk(id);
        if (!beneficio) return null;
        await beneficio.destroy();
        return beneficio;
    }
}

module.exports = new BeneficioRepository();
