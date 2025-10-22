const repository = require('../../repositories/student_support_office/student_scholarships_repository');

class BolsaEstudantilService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const bolsa = await repository.findById(id);
        if (!bolsa) throw new Error('Bolsa não encontrada.');
        return bolsa;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const atualizado = await repository.update(id, data);
        if (!atualizado) throw new Error('Bolsa não encontrada.');
        return atualizado;
    }

    async remover(id) {
        const deletado = await repository.delete(id);
        if (!deletado) throw new Error('Bolsa não encontrada.');
        return deletado;
    }
}

module.exports = new BolsaEstudantilService();
