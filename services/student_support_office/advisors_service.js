const repository = require('../../repositories/student_support_office/advisors_repository');

class OrientadorService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const orientador = await repository.findById(id);
        if (!orientador) throw new Error('Orientador não encontrado');
        return orientador;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const orientador = await repository.update(id, data);
        if (!orientador) throw new Error('Orientador não encontrado');
        return orientador;
    }

    async excluir(id) {
        const deleted = await repository.delete(id);
        if (!deleted) throw new Error('Orientador não encontrado');
        return true;
    }
}

module.exports = new OrientadorService();
