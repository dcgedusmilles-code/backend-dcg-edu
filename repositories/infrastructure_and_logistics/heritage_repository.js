const { Patrimonio } = require('../../models');

class PatrimonioRepository {
    async findAll() {
        return await Patrimonio.findAll();
    }

    async findById(id) {
        return await Patrimonio.findByPk(id);
    }

    async create(data) {
        return await Patrimonio.create(data);
    }

    async update(id, data) {
        const record = await Patrimonio.findByPk(id);
        if (!record) return null;
        await record.update(data);
        return record;
    }

    async delete(id) {
        const record = await Patrimonio.findByPk(id);
        if (!record) return null;
        await record.destroy();
        return record;
    }
}

module.exports = new PatrimonioRepository();
