const repository = require('../../repositories/training_coordinators/training_coordinators_repository');

class CoordenadorTreinamentoService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const registro = await repository.findById(id);
        if (!registro) throw new Error('Coordenador de treinamento não encontrado');
        return registro;
    }

    async criar(dados) {
        return await repository.create(dados);
    }

    async atualizar(id, dados) {
        const registro = await repository.update(id, dados);
        if (!registro) throw new Error('Coordenador de treinamento não encontrado');
        return registro;
    }

    async excluir(id) {
        const registro = await repository.delete(id);
        if (!registro) throw new Error('Coordenador de treinamento não encontrado');
        return registro;
    }
}

module.exports = new CoordenadorTreinamentoService();
