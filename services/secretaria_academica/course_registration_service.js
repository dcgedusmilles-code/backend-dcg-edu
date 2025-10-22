const repository = require('../../repositories/secretaria_academica/course_registration_repository');

class InscricaoDisciplinaService {
    async listarTodos() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const registro = await repository.findById(id);
        if (!registro) throw new Error('Inscrição não encontrada');
        return registro;
    }

    async criar(dados) {
        return await repository.create(dados);
    }

    async atualizar(id, dados) {
        const atualizado = await repository.update(id, dados);
        if (!atualizado) throw new Error('Inscrição não encontrada');
        return atualizado;
    }

    async excluir(id) {
        const deletado = await repository.delete(id);
        if (!deletado) throw new Error('Inscrição não encontrada');
        return true;
    }
}

module.exports = new InscricaoDisciplinaService();
