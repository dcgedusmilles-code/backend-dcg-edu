const repository = require('../../repositories/student_support_office/student_services_repository');

class AtendimentoEstudanteService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const atendimento = await repository.findById(id);
        if (!atendimento) throw new Error('Atendimento não encontrado.');
        return atendimento;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const atualizado = await repository.update(id, data);
        if (!atualizado) throw new Error('Atendimento não encontrado.');
        return atualizado;
    }

    async remover(id) {
        const deletado = await repository.delete(id);
        if (!deletado) throw new Error('Atendimento não encontrado.');
        return deletado;
    }
}

module.exports = new AtendimentoEstudanteService();
