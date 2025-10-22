const repository = require('../../repositories/training_coordinators/training_plan_repository');

class PlanoDeAulaService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const plano = await repository.findById(id);
        if (!plano) throw new Error('Plano de aula não encontrado');
        return plano;
    }

    async criar(dados) {
        return await repository.create(dados);
    }

    async atualizar(id, dados) {
        const plano = await repository.update(id, dados);
        if (!plano) throw new Error('Plano de aula não encontrado');
        return plano;
    }

    async excluir(id) {
        const plano = await repository.delete(id);
        if (!plano) throw new Error('Plano de aula não encontrado');
        return plano;
    }
}

module.exports = new PlanoDeAulaService();
