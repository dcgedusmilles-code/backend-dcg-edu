const propostaComercialRepo = require('../../repositories/commercial/commercial_proposals_repository');

class PropostaComercialService {
    async listar() {
        return await propostaComercialRepo.findAll();
    }

    async buscarPorId(id) {
        const proposta = await propostaComercialRepo.findById(id);
        if (!proposta) throw new Error('Proposta comercial não encontrada');
        return proposta;
    }

    async criar(dados) {
        return await propostaComercialRepo.create(dados);
    }

    async atualizar(id, dados) {
        return await propostaComercialRepo.update(id, dados);
    }

    async remover(id) {
        return await propostaComercialRepo.delete(id);
    }
}

module.exports = new PropostaComercialService();
