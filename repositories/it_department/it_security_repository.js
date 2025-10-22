const { SegurancaTI } = require('../../models');

class SegurancaTIRepository {
    async create(data) {
        return await SegurancaTI.create(data);
    }

    async findAll() {
        return await SegurancaTI.findAll();
    }

    async findById(id) {
        return await SegurancaTI.findByPk(id);
    }

    async update(id, data) {
        const registro = await SegurancaTI.findByPk(id);
        if (!registro) return null;
        return await registro.update(data);
    }

    async delete(id) {
        const registro = await SegurancaTI.findByPk(id);
        if (!registro) return null;
        await registro.destroy();
        return true;
    }
}

module.exports = new SegurancaTIRepository();
