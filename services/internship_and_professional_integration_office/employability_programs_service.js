const repository = require('../../repositories/internship_and_professional_integration_office/employability_programs_repository');

class ProgramaEmpregabilidadeService {
    async listar() {
        return await repository.findAll();
    }

    async obterPorId(id) {
        const programa = await repository.findById(id);
        if (!programa) throw new Error('Programa de empregabilidade não encontrado');
        return programa;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const updated = await repository.update(id, data);
        if (!updated) throw new Error('Programa de empregabilidade não encontrado');
        return updated;
    }

    async remover(id) {
        const deleted = await repository.delete(id);
        if (!deleted) throw new Error('Programa de empregabilidade não encontrado');
        return true;
    }
}

module.exports = new ProgramaEmpregabilidadeService();
