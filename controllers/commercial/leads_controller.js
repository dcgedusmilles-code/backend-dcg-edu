const leadService = require('../../services/commercial/leads_service');

class LeadController {
    /**
     * Lista todos os leads
     */
    async listar(req, res) {
        try {
            const leads = await leadService.listar(req.query);
            res.json(leads);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca um lead pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const lead = await leadService.buscarPorId(req.params.id);
            if (!lead) return res.status(404).json({ message: 'Lead não encontrado' });
            res.json(lead);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria um novo lead
     */
    async criar(req, res) {
        try {
            const lead = await leadService.criar(req.body);
            res.status(201).json(lead);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza um lead existente
     */
    async atualizar(req, res) {
        try {
            const lead = await leadService.atualizar(req.params.id, req.body);
            if (!lead) return res.status(404).json({ message: 'Lead não encontrado' });
            res.json(lead);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove um lead
     */
    async remover(req, res) {
        try {
            const deleted = await leadService.remover(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Lead não encontrado' });
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new LeadController();
