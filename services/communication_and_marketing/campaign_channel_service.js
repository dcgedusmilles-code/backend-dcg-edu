'use strict';
const campanhaCanalRepository = require('../../repositories/communication_and_marketing/campaign_channel_repository');

class CampanhaCanalService {
    async createCampanhaCanal(data) {
        return await campanhaCanalRepository.create(data);
    }

    async getAllCampanhaCanais() {
        return await campanhaCanalRepository.findAll();
    }

    async getCampanhaCanalById(id) {
        return await campanhaCanalRepository.findById(id);
    }

    async updateCampanhaCanal(id, data) {
        return await campanhaCanalRepository.update(id, data);
    }

    async deleteCampanhaCanal(id) {
        return await campanhaCanalRepository.delete(id);
    }
}

module.exports = new CampanhaCanalService();
