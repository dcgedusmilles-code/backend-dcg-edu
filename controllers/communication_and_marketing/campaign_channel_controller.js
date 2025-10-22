'use strict';
const campanhaCanalService = require('../../services/communication_and_marketing/campaign_channel_service');

class CampanhaCanalController {
    async create(req, res) {
        try {
            const campanhaCanal = await campanhaCanalService.createCampanhaCanal(req.body);
            return res.status(201).json(campanhaCanal);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const campanhaCanais = await campanhaCanalService.getAllCampanhaCanais();
            return res.json(campanhaCanais);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const campanhaCanal = await campanhaCanalService.getCampanhaCanalById(req.params.id);
            if (!campanhaCanal) return res.status(404).json({ error: 'CampanhaCanal não encontrada' });
            return res.json(campanhaCanal);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const campanhaCanal = await campanhaCanalService.updateCampanhaCanal(req.params.id, req.body);
            if (!campanhaCanal) return res.status(404).json({ error: 'CampanhaCanal não encontrada' });
            return res.json(campanhaCanal);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await campanhaCanalService.deleteCampanhaCanal(req.params.id);
            if (!deleted) return res.status(404).json({ error: 'CampanhaCanal não encontrada' });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CampanhaCanalController();
