'use strict';
const service = require('../../services/human_resources/employee_benefits_service');

class FuncionarioBeneficioController {
    async create(req, res) {
        try {
            const result = await service.create(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const result = await service.getAll();
        res.json(result);
    }

    async getById(req, res) {
        const result = await service.getById(req.params.id);
        if (!result) return res.status(404).json({ message: 'Registro não encontrado' });
        res.json(result);
    }

    async update(req, res) {
        const result = await service.update(req.params.id, req.body);
        if (!result) return res.status(404).json({ message: 'Registro não encontrado' });
        res.json(result);
    }

    async delete(req, res) {
        const result = await service.delete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Registro não encontrado' });
        res.status(204).send();
    }
}

module.exports = new FuncionarioBeneficioController();
