const vagaEstagioRepository = require('../../repositories/internship_and_professional_integration_office/vacancies_internship_repository');

class VagaEstagioService {
    async criarVaga(data) {
        return await vagaEstagioRepository.create(data);
    }

    async listarVagas() {
        return await vagaEstagioRepository.findAll();
    }

    async obterVagaPorId(id) {
        const vaga = await vagaEstagioRepository.findById(id);
        if (!vaga) throw new Error('Vaga não encontrada');
        return vaga;
    }

    async atualizarVaga(id, data) {
        const vaga = await vagaEstagioRepository.update(id, data);
        if (!vaga) throw new Error('Vaga não encontrada');
        return vaga;
    }

    async excluirVaga(id) {
        const vaga = await vagaEstagioRepository.delete(id);
        if (!vaga) throw new Error('Vaga não encontrada');
        return vaga;
    }
}

module.exports = new VagaEstagioService();
