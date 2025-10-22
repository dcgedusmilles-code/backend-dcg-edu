const candidaturaRepo = require('../../repositories/internship_and_professional_integration_office/applications_internships_repository');

class CandidaturaEstagioService {
    async listar() {
        return await candidaturaRepo.findAll();
    }

    async obterPorId(id) {
        const candidatura = await candidaturaRepo.findById(id);
        if (!candidatura) throw new Error('Candidatura não encontrada');
        return candidatura;
    }

    async criar(dados) {
        return await candidaturaRepo.create(dados);
    }

    async atualizar(id, dados) {
        const candidatura = await candidaturaRepo.update(id, dados);
        if (!candidatura) throw new Error('Candidatura não encontrada');
        return candidatura;
    }

    async remover(id) {
        const candidatura = await candidaturaRepo.delete(id);
        if (!candidatura) throw new Error('Candidatura não encontrada');
        return candidatura;
    }
}

module.exports = new CandidaturaEstagioService();
