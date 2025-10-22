const professorRepository = require('../../repositories/pedagogico/teachers_repository');

class ProfessorService {
    async criarProfessor(data) {
        return await professorRepository.create(data);
    }

    async listarProfessores() {
        return await professorRepository.findAll();
    }

    async obterProfessor(id) {
        const professor = await professorRepository.findById(id);
        if (!professor) throw new Error('Professor não encontrado');
        return professor;
    }

    async atualizarProfessor(id, data) {
        const updated = await professorRepository.update(id, data);
        if (!updated) throw new Error('Professor não encontrado para atualização');
        return updated;
    }

    async deletarProfessor(id) {
        const deleted = await professorRepository.delete(id);
        if (!deleted) throw new Error('Professor não encontrado para exclusão');
        return deleted;
    }
}

module.exports = new ProfessorService();
