const { BancaExaminadora, Avaliacao, Instrutor } = require('../../models');

class BancaExaminadoraRepository {
    async findAll() {
        return await BancaExaminadora.findAll({
            include: ['avaliacao', 'instrutor']
        });
    }

    async findById(id) {
        return await BancaExaminadora.findByPk(id, {
            include: ['avaliacao', 'instrutor']
        });
    }

    async create(data) {
        return await BancaExaminadora.create(data);
    }

    async update(id, data) {
        const banca = await BancaExaminadora.findByPk(id);
        if (!banca) return null;
        return await banca.update(data);
    }

    async delete(id) {
        return await BancaExaminadora.destroy({ where: { id } });
    }
}

module.exports = new BancaExaminadoraRepository();
