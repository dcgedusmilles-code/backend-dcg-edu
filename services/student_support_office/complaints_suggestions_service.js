const reclamacaoSugestaoRepository = require('../../repositories/student_support_office/complaints_suggestions_repository');

class ReclamacaoSugestaoService {
    async listar() {
        return await reclamacaoSugestaoRepository.findAll();
    }

    async obterPorId(id) {
        const reclamacao = await reclamacaoSugestaoRepository.findById(id);
        if (!reclamacao) throw new Error('Reclamação/Sugestão não encontrada');
        return reclamacao;
    }

    async criar(dados) {
        dados.data_envio = new Date();
        return await reclamacaoSugestaoRepository.create(dados);
    }

    async atualizar(id, dados) {
        const atualizado = await reclamacaoSugestaoRepository.update(id, dados);
        if (!atualizado) throw new Error('Não foi possível atualizar o registro');
        return atualizado;
    }

    async excluir(id) {
        const apagado = await reclamacaoSugestaoRepository.delete(id);
        if (!apagado) throw new Error('Registro não encontrado para exclusão');
        return apagado;
    }
}

module.exports = new ReclamacaoSugestaoService();
