'use strict';
const estagioService = require('../../services/internship_and_professional_integration_office/internships_service');

class EstagioController {
    async create(req, res) {
        try {
            const data = await estagioService.criarEstagio(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async list(req, res) {
        try {
            const data = await estagioService.listarEstagios();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async get(req, res) {
        try {
            const data = await estagioService.obterEstagio(req.params.id);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const data = await estagioService.atualizarEstagio(req.params.id, req.body);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await estagioService.excluirEstagio(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new EstagioController();
