const { ResultadoAvaliacao } = require('../../models');

class ResultadoAvaliacaoRepository {
    async findAll() {
        return await ResultadoAvaliacao.findAll({ include: ['avaliacao', 'participante', 'recursos'] });
    }

    async findById(id) {
        return await ResultadoAvaliacao.findByPk(id, { include: ['avaliacao', 'participante', 'recursos'] });
    }

    async create(data) {
        return await ResultadoAvaliacao.create(data);
    }

    async update(id, data) {
        const resultado = await ResultadoAvaliacao.findByPk(id);
        if (!resultado) return null;
        await resultado.update(data);
        return resultado;
    }

    async delete(id) {
        const resultado = await ResultadoAvaliacao.findByPk(id);
        if (!resultado) return null;
        await resultado.destroy();
        return true;
    }
}

module.exports = new ResultadoAvaliacaoRepository();
