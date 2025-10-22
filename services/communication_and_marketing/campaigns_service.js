const campanhaRepository = require('../../repositories/communication_and_marketing/campaigns_repository');

class CampanhaService {
    async createCampanha(data) {
        return await campanhaRepository.create(data);
    }

    async listarCampanhas() {
        return await campanhaRepository.findAll();
    }

    async buscarCampanhaPorId(id) {
        return await campanhaRepository.findById(id);
    }

    async atualizarCampanha(id, data) {
        return await campanhaRepository.update(id, data);
    }

    async deletarCampanha(id) {
        return await campanhaRepository.delete(id);
    }
}

module.exports = new CampanhaService();
