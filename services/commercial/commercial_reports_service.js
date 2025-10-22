const relatorioComercialRepo = require('../../repositories/commercial/commercial_reports_repository');

class RelatorioComercialService {
    async listar() {
        return await relatorioComercialRepo.findAll();
    }

    async buscarPorId(id) {
        const relatorio = await relatorioComercialRepo.findById(id);
        if (!relatorio) throw new Error('Relatório comercial não encontrado');
        return relatorio;
    }

    async criar(dados) {
        return await relatorioComercialRepo.create(dados);
    }

    async atualizar(id, dados) {
        return await relatorioComercialRepo.update(id, dados);
    }

    async remover(id) {
        return await relatorioComercialRepo.delete(id);
    }
}

module.exports = new RelatorioComercialService();
