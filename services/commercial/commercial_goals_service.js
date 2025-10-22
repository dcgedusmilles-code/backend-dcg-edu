const metaComercialRepo = require('../../repositories/commercial/commercial_goals_repository');

class MetaComercialService {
    async listar() {
        return await metaComercialRepo.findAll();
    }

    async buscarPorId(id) {
        const meta = await metaComercialRepo.findById(id);
        if (!meta) throw new Error('Meta comercial não encontrada');
        return meta;
    }

    async criar(dados) {
        return await metaComercialRepo.create(dados);
    }

    async atualizar(id, dados) {
        return await metaComercialRepo.update(id, dados);
    }

    async remover(id) {
        return await metaComercialRepo.delete(id);
    }
}

module.exports = new MetaComercialService();
