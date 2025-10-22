const { AvaliacaoEstagio } = require('../../models');

class AvaliacaoEstagioRepository {
    async create(data) {
        return await AvaliacaoEstagio.create(data);
    }

    async findAll() {
        return await AvaliacaoEstagio.findAll({ include: ['estagio'] });
    }

    async findById(id) {
        return await AvaliacaoEstagio.findByPk(id, { include: ['estagio'] });
    }

    async update(id, data) {
        const [rows] = await AvaliacaoEstagio.update(data, { where: { id } });
        return rows > 0;
    }

    async delete(id) {
        return await AvaliacaoEstagio.destroy({ where: { id } });
    }
}

module.exports = new AvaliacaoEstagioRepository();
