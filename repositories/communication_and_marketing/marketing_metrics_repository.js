'use strict';
const { MetricaMarketing } = require('../../models');

class MetricaMarketingRepository {
    async create(data) {
        return await MetricaMarketing.create(data);
    }

    async findAll() {
        return await MetricaMarketing.findAll();
    }

    async findById(id) {
        return await MetricaMarketing.findByPk(id);
    }

    async update(id, data) {
        const metrica = await MetricaMarketing.findByPk(id);
        if (!metrica) return null;
        await metrica.update(data);
        return metrica;
    }

    async delete(id) {
        const metrica = await MetricaMarketing.findByPk(id);
        if (!metrica) return null;
        await metrica.destroy();
        return true;
    }
}

module.exports = new MetricaMarketingRepository();
