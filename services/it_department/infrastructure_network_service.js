const repository = require('../../repositories/it_department/infrastructure_network_repository');

class RedeInfraestruturaService {
    async criarRede(data) {
        if (!data.nome || !data.tipo) {
            throw new Error('Nome e tipo são obrigatórios');
        }
        return await repository.create(data);
    }

    async listarRedes() {
        return await repository.findAll();
    }

    async obterRedePorId(id) {
        const rede = await repository.findById(id);
        if (!rede) throw new Error('Rede não encontrada');
        return rede;
    }

    async atualizarRede(id, data) {
        const rede = await repository.update(id, data);
        if (!rede) throw new Error('Rede não encontrada para atualização');
        return rede;
    }

    async removerRede(id) {
        const sucesso = await repository.delete(id);
        if (!sucesso) throw new Error('Rede não encontrada para exclusão');
        return true;
    }
}

module.exports = new RedeInfraestruturaService();
