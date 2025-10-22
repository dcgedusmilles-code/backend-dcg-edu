const leadRepo = require('../../repositories/commercial/leads_repository');

class LeadService {
    /**
     * Cria um novo lead com validações obrigatórias.
     */
    async criar(dados) {
        if (!dados.nome || !dados.email) {
            throw new Error('Nome e e-mail são obrigatórios');
        }
        return await leadRepo.create(dados);
    }

    /**
     * Lista todos os leads com filtros opcionais.
     */
    async listar(filtros = {}) {
        return await leadRepo.findAll(filtros);
    }

    /**
     * Busca um lead pelo ID.
     */
    async buscarPorId(id) {
        const lead = await leadRepo.findById(id);
        if (!lead) throw new Error('Lead não encontrado');
        return lead;
    }

    /**
     * Atualiza os dados de um lead.
     */
    async atualizar(id, dados) {
        return await leadRepo.update(id, dados);
    }

    /**
     * Remove um lead do sistema.
     */
    async remover(id) {
        return await leadRepo.delete(id);
    }
}

module.exports = new LeadService();
