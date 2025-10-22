const inscricaoRepository = require('../../repositories/training_coordinators/registration_repository');

class InscricaoService {
    async listar() {
        return await inscricaoRepository.findAll();
    }

    async buscarPorId(id) {
        const inscricao = await inscricaoRepository.findById(id);
        if (!inscricao) throw new Error('Inscrição não encontrada');
        return inscricao;
    }

    async criar(dados) {
        return await inscricaoRepository.create(dados);
    }

    async atualizar(id, dados) {
        const inscricao = await inscricaoRepository.update(id, dados);
        if (!inscricao) throw new Error('Inscrição não encontrada');
        return inscricao;
    }

    async excluir(id) {
        const inscricao = await inscricaoRepository.delete(id);
        if (!inscricao) throw new Error('Inscrição não encontrada');
        return inscricao;
    }
}

module.exports = new InscricaoService();
