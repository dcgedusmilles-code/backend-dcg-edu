const { BolsaDesconto, Aluno } = require('../../models');

class BolsaDescontoRepository {
    async create(data) {
        return await BolsaDesconto.create(data);
    }

    async findAll() {
        return await BolsaDesconto.findAll({ include: [{ model: Aluno, as: 'aluno' }] });
    }

    async findById(id) {
        return await BolsaDesconto.findByPk(id, { include: [{ model: Aluno, as: 'aluno' }] });
    }

    async update(id, data) {
        const bolsa = await BolsaDesconto.findByPk(id);
        if (!bolsa) return null;
        return await bolsa.update(data);
    }

    async delete(id) {
        return await BolsaDesconto.destroy({ where: { id } });
    }
}

module.exports = new BolsaDescontoRepository();
