'use strict';
const metricaMarketingRepository = require('../../repositories/communication_and_marketing/marketing_metrics_repository');

class MetricaMarketingService {
    async criarMetrica(data) {
        return await metricaMarketingRepository.create(data);
    }

    async listarMetricas() {
        return await metricaMarketingRepository.findAll();
    }

    async obterMetrica(id) {
        const metrica = await metricaMarketingRepository.findById(id);
        if (!metrica) throw new Error('Métrica não encontrada');
        return metrica;
    }

    async atualizarMetrica(id, data) {
        const metrica = await metricaMarketingRepository.update(id, data);
        if (!metrica) throw new Error('Métrica não encontrada');
        return metrica;
    }

    async removerMetrica(id) {
        const deleted = await metricaMarketingRepository.delete(id);
        if (!deleted) throw new Error('Métrica não encontrada');
        return true;
    }
}

module.exports = new MetricaMarketingService();
