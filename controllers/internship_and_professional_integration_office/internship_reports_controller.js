'use strict';
const relatorioEstagioService = require('../../services/internship_and_professional_integration_office/internship_reports_service');

class RelatorioEstagioController {
    async create(req, res) {
        try {
            const data = await relatorioEstagioService.createRelatorio(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async list(req, res) {
        try {
            const data = await relatorioEstagioService.listarRelatorios();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async get(req, res) {
        try {
            const data = await relatorioEstagioService.obterRelatorio(req.params.id);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const data = await relatorioEstagioService.atualizarRelatorio(req.params.id, req.body);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await relatorioEstagioService.excluirRelatorio(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new RelatorioEstagioController();
