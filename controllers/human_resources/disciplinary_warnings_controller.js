'use strict';
const advertenciaService = require('../../services/human_resources/disciplinary_warnings_service');

class AdvertenciaDisciplinaController {
    async create(req, res) {
        try {
            const advertencia = await advertenciaService.create(req.body);
            res.status(201).json(advertencia);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const advertencias = await advertenciaService.getAll();
        res.json(advertencias);
    }

    async getById(req, res) {
        const advertencia = await advertenciaService.getById(req.params.id);
        if (!advertencia) return res.status(404).json({ message: 'Advertência não encontrada' });
        res.json(advertencia);
    }

    async update(req, res) {
        const advertencia = await advertenciaService.update(req.params.id, req.body);
        if (!advertencia) return res.status(404).json({ message: 'Advertência não encontrada' });
        res.json(advertencia);
    }

    async delete(req, res) {
        const advertencia = await advertenciaService.delete(req.params.id);
        if (!advertencia) return res.status(404).json({ message: 'Advertência não encontrada' });
        res.status(204).send();
    }
}

module.exports = new AdvertenciaDisciplinaController();
