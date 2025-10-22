const repository = require('../../repositories/student_support_office/partner_institutions_repository');

class InstituicaoParceiraService {
    async listar() {
        return await repository.findAll();
    }

    async obterPorId(id) {
        const inst = await repository.findById(id);
        if (!inst) throw new Error('Instituição parceira não encontrada');
        return inst;
    }

    async criar(dados) {
        return await repository.create(dados);
    }

    async atualizar(id, dados) {
        const atualizado = await repository.update(id, dados);
        if (!atualizado) throw new Error('Não foi possível atualizar a instituição');
        return atualizado;
    }

    async excluir(id) {
        const apagado = await repository.delete(id);
        if (!apagado) throw new Error('Instituição não encontrada para exclusão');
        return apagado;
    }
}

module.exports = new InstituicaoParceiraService();
