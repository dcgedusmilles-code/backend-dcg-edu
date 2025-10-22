'use strict';
const candidatoService = require('../../services/human_resources/candidates_service');

class CandidatoController {
    async create(req, res) {
        try {
            const candidato = await candidatoService.create(req.body);
            res.status(201).json(candidato);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        const candidatos = await candidatoService.getAll();
        res.json(candidatos);
    }

    async getById(req, res) {
        const candidato = await candidatoService.getById(req.params.id);
        if (!candidato) return res.status(404).json({ message: 'Candidato não encontrado' });
        res.json(candidato);
    }

    async update(req, res) {
        const candidato = await candidatoService.update(req.params.id, req.body);
        if (!candidato) return res.status(404).json({ message: 'Candidato não encontrado' });
        res.json(candidato);
    }

    async delete(req, res) {
        const candidato = await candidatoService.delete(req.params.id);
        if (!candidato) return res.status(404).json({ message: 'Candidato não encontrado' });
        res.status(204).send();
    }
}

module.exports = new CandidatoController();
