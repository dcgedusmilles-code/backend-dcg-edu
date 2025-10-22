const { FeedbackAvaliacao } = require('../../models');

class FeedbackAvaliacaoRepository {
    async findAll() {
        return await FeedbackAvaliacao.findAll({ include: ['avaliacao', 'participante'] });
    }

    async findById(id) {
        return await FeedbackAvaliacao.findByPk(id, { include: ['avaliacao', 'participante'] });
    }

    async create(data) {
        return await FeedbackAvaliacao.create(data);
    }

    async update(id, data) {
        await FeedbackAvaliacao.update(data, { where: { id } });
        return this.findById(id);
    }

    async delete(id) {
        return await FeedbackAvaliacao.destroy({ where: { id } });
    }
}

module.exports = new FeedbackAvaliacaoRepository();
