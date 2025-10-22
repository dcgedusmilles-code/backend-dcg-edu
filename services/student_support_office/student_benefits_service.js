const repository = require('../../repositories/student_support_office/student_benefits_repository');

class BeneficioEstudantilService {
    async listar() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const beneficio = await repository.findById(id);
        if (!beneficio) throw new Error('Benefício não encontrado.');
        return beneficio;
    }

    async criar(data) {
        return await repository.create(data);
    }

    async atualizar(id, data) {
        const atualizado = await repository.update(id, data);
        if (!atualizado) throw new Error('Benefício não encontrado.');
        return atualizado;
    }

    async remover(id) {
        const deletado = await repository.delete(id);
        if (!deletado) throw new Error('Benefício não encontrado.');
        return deletado;
    }
}

module.exports = new BeneficioEstudantilService();
