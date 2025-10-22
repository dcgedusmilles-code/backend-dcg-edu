const repository = require('../../repositories/internship_and_professional_integration_office/company_supervisors_repository');

class SupervisorEmpresaService {
    async listar() {
        return await repository.findAll();
    }

    async obterPorId(id) {
        const supervisor = await repository.findById(id);
        if (!supervisor) throw new Error('Supervisor não encontrado');
        return supervisor;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const updated = await repository.update(id, data);
        if (!updated) throw new Error('Supervisor não encontrado');
        return updated;
    }

    async remover(id) {
        const deleted = await repository.delete(id);
        if (!deleted) throw new Error('Supervisor não encontrado');
        return true;
    }
}

module.exports = new SupervisorEmpresaService();
