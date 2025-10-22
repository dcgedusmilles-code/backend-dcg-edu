const { Treinamento } = require('../../models');

class TreinamentoRepository {
    async findAll() {
        return Treinamento.findAll({ include: ['participacoes'] });
    }

    async findById(id) {
        return Treinamento.findByPk(id, { include: ['participacoes'] });
    }

    async create(data) {
        return Treinamento.create(data);
    }

    async update(id, data) {
        const treinamento = await this.findById(id);
        if (!treinamento) return null;
        return treinamento.update(data);
    }

    async delete(id) {
        const treinamento = await this.findById(id);
        if (!treinamento) return null;
        await treinamento.destroy();
        return true;
    }
}

module.exports = new TreinamentoRepository();
