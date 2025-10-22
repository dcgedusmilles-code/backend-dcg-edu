'use strict';
const { CampanhaCanal } = require('../../models');

class CampanhaCanalRepository {
    async create(data) {
        return await CampanhaCanal.create(data);
    }

    async findAll() {
        return await CampanhaCanal.findAll();
    }

    async findById(id) {
        return await CampanhaCanal.findByPk(id);
    }

    async update(id, data) {
        const campanhaCanal = await CampanhaCanal.findByPk(id);
        if (!campanhaCanal) return null;
        return await campanhaCanal.update(data);
    }

    async delete(id) {
        const campanhaCanal = await CampanhaCanal.findByPk(id);
        if (!campanhaCanal) return null;
        await campanhaCanal.destroy();
        return true;
    }
}

module.exports = new CampanhaCanalRepository();
