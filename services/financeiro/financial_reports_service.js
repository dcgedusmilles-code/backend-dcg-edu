const relatorioRepository = require('../../repositories/financeiro/financial_reports_repository');

class RelatorioFinanceiroService {
    async create(data) {
        if (!data.gerado_em) {
            data.gerado_em = new Date(); // define a data atual automaticamente
        }
        return await relatorioRepository.create(data);
    }

    async findAll() {
        return await relatorioRepository.findAll();
    }

    async findById(id) {
        return await relatorioRepository.findById(id);
    }

    async update(id, data) {
        return await relatorioRepository.update(id, data);
    }

    async delete(id) {
        return await relatorioRepository.delete(id);
    }
}

module.exports = new RelatorioFinanceiroService();
