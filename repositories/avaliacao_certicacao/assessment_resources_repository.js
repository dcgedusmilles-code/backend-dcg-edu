const { RecursoAvaliacao } = require('../../models');

class RecursoAvaliacaoRepository {
    async findAll() {
        return await RecursoAvaliacao.findAll();
    }

    async findById(id) {
        return await RecursoAvaliacao.findByPk(id);
    }

    async create(data) {
        return await RecursoAvaliacao.create(data);
    }

    async update(id, data) {
        const recurso = await RecursoAvaliacao.findByPk(id);
        if (!recurso) return null;
        return await recurso.update(data);
    }

    async delete(id) {
        const recurso = await RecursoAvaliacao.findByPk(id);
        if (!recurso) return null;
        await recurso.destroy();
        return true;
    }
}

module.exports = new RecursoAvaliacaoRepository();
