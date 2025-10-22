const metaComercialService = require('../../services/commercial/commercial_goals_service');

class MetaComercialController {
    /**
     * Lista todas as metas comerciais
     */
    async listar(req, res) {
        try {
            const metas = await metaComercialService.listar();
            res.json(metas);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca uma meta comercial pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const meta = await metaComercialService.buscarPorId(req.params.id);
            if (!meta) return res.status(404).json({ message: 'Meta comercial não encontrada' });
            res.json(meta);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria uma nova meta comercial
     */
    async criar(req, res) {
        try {
            const meta = await metaComercialService.criar(req.body);
            res.status(201).json(meta);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza uma meta comercial existente
     */
    async atualizar(req, res) {
        try {
            const meta = await metaComercialService.atualizar(req.params.id, req.body);
            if (!meta) return res.status(404).json({ message: 'Meta comercial não encontrada' });
            res.json(meta);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove uma meta comercial
     */
    async remover(req, res) {
        try {
            const deleted = await metaComercialService.remover(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Meta comercial não encontrada' });
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new MetaComercialController();
