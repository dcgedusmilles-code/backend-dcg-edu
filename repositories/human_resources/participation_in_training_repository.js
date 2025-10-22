const { ParticipacaoTreinamento } = require('../../models');

class ParticipacaoTreinamentoRepository {
    async create(data) {
        return await ParticipacaoTreinamento.create(data);
    }

    async findAll() {
        return await ParticipacaoTreinamento.findAll({ include: ['treinamento', 'funcionario'] });
    }

    async findById(id) {
        return await ParticipacaoTreinamento.findByPk(id, { include: ['treinamento', 'funcionario'] });
    }

    async update(id, data) {
        const participacao = await ParticipacaoTreinamento.findByPk(id);
        if (!participacao) return null;
        return await participacao.update(data);
    }

    async delete(id) {
        const participacao = await ParticipacaoTreinamento.findByPk(id);
        if (!participacao) return null;
        await participacao.destroy();
        return participacao;
    }
}

module.exports = new ParticipacaoTreinamentoRepository();
