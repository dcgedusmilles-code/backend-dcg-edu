const contratoRepo = require('../../repositories/commercial/contracts_repository');

class ContratoService {
    /**
     * Cria um novo contrato com validações obrigatórias.
     */
    async criar(dados) {
        if (!dados.numero_contrato) throw new Error('Número do contrato é obrigatório');
        if (!dados.id_cliente) throw new Error('Cliente é obrigatório');
        if (!dados.id_responsavel) throw new Error('Responsável é obrigatório');
        if (!dados.valor_total) throw new Error('Valor total é obrigatório');
        if (!dados.data_inicio) throw new Error('Data de início é obrigatória');

        return await contratoRepo.create(dados);
    }

    /**
     * Lista todos os contratos com filtros opcionais.
     */
    async listar(filtros = {}) {
        return await contratoRepo.findAll(filtros);
    }

    /**
     * Busca um contrato pelo ID.
     */
    async buscarPorId(id) {
        const contrato = await contratoRepo.findById(id);
        if (!contrato) throw new Error('Contrato não encontrado');
        return contrato;
    }

    /**
     * Atualiza um contrato existente.
     */
    async atualizar(id, dados) {
        const contrato = await contratoRepo.findById(id);
        if (!contrato) throw new Error('Contrato não encontrado');
        return await contratoRepo.update(id, dados);
    }

    /**
     * Remove um contrato.
     */
    async remover(id) {
        return await contratoRepo.delete(id);
    }
}

module.exports = new ContratoService();
