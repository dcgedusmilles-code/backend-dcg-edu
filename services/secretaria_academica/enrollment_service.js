const repository = require('../../repositories/secretaria_academica/enrollment_repository');

class MatriculaService {
    async listarTodos() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const matricula = await repository.findById(id);
        if (!matricula) throw new Error('Matrícula não encontrada');
        return matricula;
    }

    async criar(dados) {
        return await repository.create(dados);
    }

    async atualizar(id, dados) {
        const atualizada = await repository.update(id, dados);
        if (!atualizada) throw new Error('Matrícula não encontrada');
        return atualizada;
    }

    async excluir(id) {
        const deletado = await repository.delete(id);
        if (!deletado) throw new Error('Matrícula não encontrada');
        return true;
    }
}

module.exports = new MatriculaService();
