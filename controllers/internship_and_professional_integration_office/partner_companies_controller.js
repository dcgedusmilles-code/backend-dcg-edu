'use strict';
const empresaService = require('../../services/internship_and_professional_integration_office/partner_companies_service');

class EmpresaParceiraController {
    async create(req, res) {
        try {
            const data = await empresaService.criarEmpresa(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async list(req, res) {
        try {
            const data = await empresaService.listarEmpresas();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async get(req, res) {
        try {
            const data = await empresaService.obterEmpresa(req.params.id);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const data = await empresaService.atualizarEmpresa(req.params.id, req.body);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await empresaService.excluirEmpresa(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new EmpresaParceiraController();
