'use strict';
const parceriaService = require('../../services/communication_and_marketing/partnerships_service');

class ParceriaController {
    async create(req, res) {
        try {
            const parceria = await parceriaService.create(req.body);
            return res.status(201).json(parceria);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const parcerias = await parceriaService.getAll();
        return res.json(parcerias);
    }

    async getById(req, res) {
        const parceria = await parceriaService.getById(req.params.id);
        if (!parceria) return res.status(404).json({ error: 'Parceria não encontrada' });
        return res.json(parceria);
    }

    async update(req, res) {
        const parceria = await parceriaService.update(req.params.id, req.body);
        if (!parceria) return res.status(404).json({ error: 'Parceria não encontrada' });
        return res.json(parceria);
    }

    async delete(req, res) {
        const parceria = await parceriaService.delete(req.params.id);
        if (!parceria) return res.status(404).json({ error: 'Parceria não encontrada' });
        return res.json({ message: 'Parceria deletada com sucesso' });
    }
}

module.exports = new ParceriaController();
