const { Inscricao } = require('../../models');

class InscricaoRepository {
    async findAll() {
        return await Inscricao.findAll({ include: ['participante', 'turma'] });
    }

    async findById(id) {
        return await Inscricao.findByPk(id, { include: ['participante', 'turma'] });
    }

    async create(data) {
        return await Inscricao.create(data);
    }

    async update(id, data) {
        const inscricao = await this.findById(id);
        if (!inscricao) return null;
        return await inscricao.update(data);
    }

    async delete(id) {
        const inscricao = await this.findById(id);
        if (!inscricao) return null;
        await inscricao.destroy();
        return inscricao;
    }
}

module.exports = new InscricaoRepository();
