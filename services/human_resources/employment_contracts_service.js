const contratoTrabalhoRepository = require('../../repositories/human_resources/employment_contracts_repository');

class ContratoTrabalhoService {
    async createContrato(data) {
        return await contratoTrabalhoRepository.create(data);
    }

    async getContratos() {
        return await contratoTrabalhoRepository.findAll();
    }

    async getContratoById(id) {
        return await contratoTrabalhoRepository.findById(id);
    }

    async updateContrato(id, data) {
        return await contratoTrabalhoRepository.update(id, data);
    }

    async deleteContrato(id) {
        return await contratoTrabalhoRepository.delete(id);
    }
}

module.exports = new ContratoTrabalhoService();
