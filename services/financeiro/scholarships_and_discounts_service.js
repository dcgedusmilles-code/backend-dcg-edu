const bolsaDescontoRepository = require('../../repositories/financeiro/scholarships_and_discounts_repository');

class BolsaDescontoService {
    async createBolsa(data) {
        return await bolsaDescontoRepository.create(data);
    }

    async getBolsas() {
        return await bolsaDescontoRepository.findAll();
    }

    async getBolsaById(id) {
        return await bolsaDescontoRepository.findById(id);
    }

    async updateBolsa(id, data) {
        return await bolsaDescontoRepository.update(id, data);
    }

    async deleteBolsa(id) {
        return await bolsaDescontoRepository.delete(id);
    }
}

module.exports = new BolsaDescontoService();
