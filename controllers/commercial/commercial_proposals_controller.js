const propostaComercialService = require('../../services/commercial/commercial_proposals_service');

class PropostaComercialController {
    /**
     * Lista todas as propostas comerciais
     */
    async listar(req, res) {
        try {
            const propostas = await propostaComercialService.listar();
            res.json(propostas);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca uma proposta comercial pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const proposta = await propostaComercialService.buscarPorId(req.params.id);
            if (!proposta) return res.status(404).json({ message: 'Proposta comercial não encontrada' });
            res.json(proposta);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria uma nova proposta comercial
     */
    async criar(req, res) {
        try {
            const proposta = await propostaComercialService.criar(req.body);
            res.status(201).json(proposta);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza uma proposta comercial existente
     */
    async atualizar(req, res) {
        try {
            const proposta = await propostaComercialService.atualizar(req.params.id, req.body);
            if (!proposta) return res.status(404).json({ message: 'Proposta comercial não encontrada' });
            res.json(proposta);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove uma proposta comercial
     */
    async remover(req, res) {
        try {
            const deleted = await propostaComercialService.remover(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Proposta comercial não encontrada' });
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new PropostaComercialController();
