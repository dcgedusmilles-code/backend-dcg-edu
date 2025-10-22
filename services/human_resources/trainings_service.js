const treinamentoRepository = require('../../repositories/human_resources/trainings_repository');

class TreinamentoService {
    async listarTodos() {
        return await treinamentoRepository.findAll();
    }

    async buscarPorId(id) {
        const treinamento = await treinamentoRepository.findById(id);
        if (!treinamento) throw new Error('Treinamento não encontrado');
        return treinamento;
    }

    async criar(dados) {
        return await treinamentoRepository.create(dados);
    }

    async atualizar(id, dados) {
        const atualizado = await treinamentoRepository.update(id, dados);
        if (!atualizado) throw new Error('Treinamento não encontrado');
        return atualizado;
    }

    async deletar(id) {
        const deletado = await treinamentoRepository.delete(id);
        if (!deletado) throw new Error('Treinamento não encontrado');
        return deletado;
    }
}

module.exports = new TreinamentoService();
