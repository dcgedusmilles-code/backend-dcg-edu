'use strict';
const beneficioService = require('../../services/human_resources/benefits_service');

class BeneficioController {
    async create(req, res) {
        try {
            const beneficio = await beneficioService.create(req.body);
            res.status(201).json(beneficio);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        const beneficios = await beneficioService.getAll();
        res.json(beneficios);
    }

    async getById(req, res) {
        const beneficio = await beneficioService.getById(req.params.id);
        if (!beneficio) return res.status(404).json({ message: 'Benefício não encontrado' });
        res.json(beneficio);
    }

    async update(req, res) {
        const beneficio = await beneficioService.update(req.params.id, req.body);
        if (!beneficio) return res.status(404).json({ message: 'Benefício não encontrado' });
        res.json(beneficio);
    }

    async delete(req, res) {
        const beneficio = await beneficioService.delete(req.params.id);
        if (!beneficio) return res.status(404).json({ message: 'Benefício não encontrado' });
        res.status(204).send();
    }
}

module.exports = new BeneficioController();
