const { Exemplar } = require('../../models');

class ExemplarRepository {
    async findAll() {
        return await Exemplar.findAll({ include: ['item', 'emprestimos', 'reservas'] });
    }

    async findById(id) {
        return await Exemplar.findByPk(id, { include: ['item', 'emprestimos', 'reservas'] });
    }

    async create(data) {
        return await Exemplar.create(data);
    }

    async update(id, data) {
        const exemplar = await Exemplar.findByPk(id);
        if (!exemplar) return null;
        return await exemplar.update(data);
    }

    async delete(id) {
        const exemplar = await Exemplar.findByPk(id);
        if (!exemplar) return null;
        await exemplar.destroy();
        return exemplar;
    }
}

module.exports = new ExemplarRepository();
