const repository = require('../../repositories/student_support_office/academic_monitoring_repository');

class AcompanhamentoAcademicoService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const acompanhamento = await repository.findById(id);
        if (!acompanhamento) throw new Error('Acompanhamento não encontrado');
        return acompanhamento;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const acompanhamento = await repository.update(id, data);
        if (!acompanhamento) throw new Error('Acompanhamento não encontrado');
        return acompanhamento;
    }

    async excluir(id) {
        const deleted = await repository.delete(id);
        if (!deleted) throw new Error('Acompanhamento não encontrado');
        return true;
    }
}

module.exports = new AcompanhamentoAcademicoService();
