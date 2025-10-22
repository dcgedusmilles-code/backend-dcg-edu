const relatorioService = require('../../services/financeiro/financial_reports_service');

class RelatorioFinanceiroController {
    async create(req, res) {
        try {
            const relatorio = await relatorioService.create(req.body);
            res.status(201).json(relatorio);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const relatorios = await relatorioService.findAll();
            res.json(relatorios);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findById(req, res) {
        try {
            const relatorio = await relatorioService.findById(req.params.id);
            if (!relatorio) return res.status(404).json({ message: 'Relatório não encontrado' });
            res.json(relatorio);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const relatorio = await relatorioService.update(req.params.id, req.body);
            if (!relatorio) return res.status(404).json({ message: 'Relatório não encontrado' });
            res.json(relatorio);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await relatorioService.delete(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Relatório não encontrado' });
            res.json({ message: 'Relatório removido com sucesso' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new RelatorioFinanceiroController();
