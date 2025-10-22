const { SegurancaPatrimonial } = require('../../models');

class SegurancaPatrimonialRepository {
    async findAll() {
        return await SegurancaPatrimonial.findAll();
    }

    async findById(id) {
        return await SegurancaPatrimonial.findByPk(id);
    }

    async create(data) {
        return await SegurancaPatrimonial.create(data);
    }

    async update(id, data) {
        const record = await SegurancaPatrimonial.findByPk(id);
        if (!record) return null;
        await record.update(data);
        return record;
    }

    async delete(id) {
        const record = await SegurancaPatrimonial.findByPk(id);
        if (!record) return null;
        await record.destroy();
        return record;
    }
}

module.exports = new SegurancaPatrimonialRepository();
