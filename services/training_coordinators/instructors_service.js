const instrutorRepository = require('../../repositories/training_coordinators/instructors_repository');

class InstrutorService {
    async criarInstrutor(data) {
        return await instrutorRepository.create(data);
    }

    async listarInstrutores() {
        return await instrutorRepository.findAll();
    }

    async obterInstrutorPorId(id) {
        const instrutor = await instrutorRepository.findById(id);
        if (!instrutor) throw new Error('Instrutor não encontrado');
        return instrutor;
    }

    async atualizarInstrutor(id, data) {
        const instrutor = await instrutorRepository.update(id, data);
        if (!instrutor) throw new Error('Instrutor não encontrado para atualização');
        return instrutor;
    }

    async excluirInstrutor(id) {
        const instrutor = await instrutorRepository.delete(id);
        if (!instrutor) throw new Error('Instrutor não encontrado para exclusão');
        return instrutor;
    }
}

module.exports = new InstrutorService();
