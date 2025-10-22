const alunoRepository = require('../../repositories/secretaria_academica/students_repository');

class AlunoService {
    async createAluno(data) {
        return await alunoRepository.create(data);
    }

    async getAllAlunos() {
        return await alunoRepository.findAll();
    }

    async getAlunoById(id) {
        return await alunoRepository.findById(id);
    }

    async updateAluno(id, data) {
        return await alunoRepository.update(id, data);
    }

    async deleteAluno(id) {
        return await alunoRepository.delete(id);
    }
}

module.exports = new AlunoService();
