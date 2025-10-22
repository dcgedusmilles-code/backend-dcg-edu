const { ReclamacaoSugestao } = require('../../models');

class ReclamacaoSugestaoRepository {
    async findAll() {
        return await ReclamacaoSugestao.findAll({ include: ['estudante'] });
    }

    async findById(id) {
        return await ReclamacaoSugestao.findByPk(id, { include: ['estudante'] });
    }

    async create(data) {
        return await ReclamacaoSugestao.create(data);
    }

    async update(id, data) {
        const reclamacao = await this.findById(id);
        if (!reclamacao) return null;
        return await reclamacao.update(data);
    }

    async delete(id) {
        const reclamacao = await this.findById(id);
        if (!reclamacao) return null;
        await reclamacao.destroy();
        return true;
    }
}

module.exports = new ReclamacaoSugestaoRepository();
