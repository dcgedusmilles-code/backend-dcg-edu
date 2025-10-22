const repository = require('../../repositories/human_resources/selection_process_repository');

class ProcessoSeletivoService {
    async criar(data) {
        return await repository.create(data);
    }

    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const registro = await repository.findById(id);
        if (!registro) throw new Error('Processo seletivo não encontrado');
        return registro;
    }

    async atualizar(id, data) {
        const atualizado = await repository.update(id, data);
        if (!atualizado) throw new Error('Processo seletivo não encontrado para atualização');
        return atualizado;
    }

    async deletar(id) {
        const deletado = await repository.delete(id);
        if (!deletado) throw new Error('Processo seletivo não encontrado para exclusão');
        return true;
    }
}

module.exports = new ProcessoSeletivoService();
