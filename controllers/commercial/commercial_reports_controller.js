const relatorioComercialService = require('../../services/commercial/commercial_reports_service');

class RelatorioComercialController {
    /**
     * Lista todos os relatórios comerciais
     */
    async listar(req, res) {
        try {
            const relatorios = await relatorioComercialService.listar();
            res.json(relatorios);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca um relatório comercial pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const relatorio = await relatorioComercialService.buscarPorId(req.params.id);
            if (!relatorio) return res.status(404).json({ message: 'Relatório comercial não encontrado' });
            res.json(relatorio);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria um novo relatório comercial
     */
    async criar(req, res) {
        try {
            const relatorio = await relatorioComercialService.criar(req.body);
            res.status(201).json(relatorio);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza um relatório comercial existente
     */
    async atualizar(req, res) {
        try {
            const relatorio = await relatorioComercialService.atualizar(req.params.id, req.body);
            if (!relatorio) return res.status(404).json({ message: 'Relatório comercial não encontrado' });
            res.json(relatorio);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove um relatório comercial
     */
    async remover(req, res) {
        try {
            const deleted = await relatorioComercialService.remover(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Relatório comercial não encontrado' });
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new RelatorioComercialController();
