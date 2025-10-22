const disciplinaRepository = require('../../repositories/pedagogico/disciplines_repository');

class DisciplinaService {
    async criarDisciplina(data) {
        return await disciplinaRepository.create(data);
    }

    async listarDisciplinas() {
        return await disciplinaRepository.findAll();
    }

    async obterDisciplina(id) {
        const disciplina = await disciplinaRepository.findById(id);
        if (!disciplina) throw new Error('Disciplina não encontrada');
        return disciplina;
    }

    async atualizarDisciplina(id, data) {
        const updated = await disciplinaRepository.update(id, data);
        if (!updated) throw new Error('Disciplina não encontrada para atualização');
        return updated;
    }

    async deletarDisciplina(id) {
        const deleted = await disciplinaRepository.delete(id);
        if (!deleted) throw new Error('Disciplina não encontrada para exclusão');
        return deleted;
    }
}

module.exports = new DisciplinaService();
