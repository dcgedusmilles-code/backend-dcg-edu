'use strict';
const metricaMarketingService = require('../../services/communication_and_marketing/marketing_metrics_service');

class MetricaMarketingController {
    async create(req, res) {
        try {
            const metrica = await metricaMarketingService.criarMetrica(req.body);
            return res.status(201).json(metrica);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const metricas = await metricaMarketingService.listarMetricas();
        return res.json(metricas);
    }

    async getById(req, res) {
        try {
            const metrica = await metricaMarketingService.obterMetrica(req.params.id);
            return res.json(metrica);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const metrica = await metricaMarketingService.atualizarMetrica(req.params.id, req.body);
            return res.json(metrica);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await metricaMarketingService.removerMetrica(req.params.id);
            return res.status(204).send();
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new MetricaMarketingController();
