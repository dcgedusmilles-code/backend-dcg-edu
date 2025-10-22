'use strict';
const { Parceria } = require('../../models');

class ParceriaRepository {
    async create(data) {
        return await Parceria.create(data);
    }

    async findAll() {
        return await Parceria.findAll();
    }

    async findById(id) {
        return await Parceria.findByPk(id);
    }

    async update(id, data) {
        const parceria = await Parceria.findByPk(id);
        if (!parceria) return null;
        return await parceria.update(data);
    }

    async delete(id) {
        const parceria = await Parceria.findByPk(id);
        if (!parceria) return null;
        await parceria.destroy();
        return parceria;
    }
}

module.exports = new ParceriaRepository();
