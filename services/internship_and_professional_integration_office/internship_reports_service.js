'use strict';
const relatorioEstagioRepository = require('../../repositories/internship_and_professional_integration_office/internship_reports_repository');

class RelatorioEstagioService {
    async createRelatorio(data) {
        return await relatorioEstagioRepository.create(data);
    }

    async listarRelatorios() {
        return await relatorioEstagioRepository.findAll();
    }

    async obterRelatorio(id) {
        const relatorio = await relatorioEstagioRepository.findById(id);
        if (!relatorio) throw new Error('Relatório não encontrado');
        return relatorio;
    }

    async atualizarRelatorio(id, data) {
        const relatorio = await relatorioEstagioRepository.update(id, data);
        if (!relatorio) throw new Error('Relatório não encontrado');
        return relatorio;
    }

    async excluirRelatorio(id) {
        const resultado = await relatorioEstagioRepository.delete(id);
        if (!resultado) throw new Error('Relatório não encontrado');
        return true;
    }
}

module.exports = new RelatorioEstagioService();
