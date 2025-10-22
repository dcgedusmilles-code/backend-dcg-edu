const repository = require('../../repositories/it_department/it_assets_repository');

class AtivoTIService {
    async criarAtivo(data) {
        if (!data.tipo || !data.descricao) {
            throw new Error('Tipo e descrição são obrigatórios');
        }
        return await repository.create(data);
    }

    async listarAtivos() {
        return await repository.findAll();
    }

    async obterAtivoPorId(id) {
        const ativo = await repository.findById(id);
        if (!ativo) throw new Error('Ativo não encontrado');
        return ativo;
    }

    async atualizarAtivo(id, data) {
        const ativo = await repository.update(id, data);
        if (!ativo) throw new Error('Ativo não encontrado para atualização');
        return ativo;
    }

    async removerAtivo(id) {
        const sucesso = await repository.delete(id);
        if (!sucesso) throw new Error('Ativo não encontrado para exclusão');
        return true;
    }
}

module.exports = new AtivoTIService();
