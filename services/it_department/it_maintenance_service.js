const repository = require('../../repositories/it_department/it_maintenance_repository');

class ManutencaoTIService {
    async criarManutencao(data) {
        if (!data.ativo_id || !data.tipo) {
            throw new Error('Ativo e tipo da manutenção são obrigatórios');
        }
        return await repository.create(data);
    }

    async listarManutencoes() {
        return await repository.findAll();
    }

    async obterManutencaoPorId(id) {
        const manutencao = await repository.findById(id);
        if (!manutencao) throw new Error('Manutenção não encontrada');
        return manutencao;
    }

    async atualizarManutencao(id, data) {
        const manutencao = await repository.update(id, data);
        if (!manutencao) throw new Error('Manutenção não encontrada para atualização');
        return manutencao;
    }

    async removerManutencao(id) {
        const sucesso = await repository.delete(id);
        if (!sucesso) throw new Error('Manutenção não encontrada para exclusão');
        return true;
    }
}

module.exports = new ManutencaoTIService();
