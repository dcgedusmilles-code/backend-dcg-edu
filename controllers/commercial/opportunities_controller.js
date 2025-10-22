'use strict';
const oportunidadeService = require('../../services/commercial/opportunities_service');

class OportunidadeController {
    async criar(req, res) {
        try {
            const oportunidade = await oportunidadeService.createOportunidade(req.body);
            return res.status(201).json(oportunidade);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async listar(req, res) {
        try {
            const oportunidades = await oportunidadeService.getAllOportunidades();
            return res.json(oportunidades);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const oportunidade = await oportunidadeService.getOportunidadeById(req.params.id);
            if (!oportunidade) return res.status(404).json({ error: 'Oportunidade não encontrada' });
            return res.json(oportunidade);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const oportunidade = await oportunidadeService.updateOportunidade(req.params.id, req.body);
            if (!oportunidade) return res.status(404).json({ error: 'Oportunidade não encontrada' });
            return res.json(oportunidade);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async remover(req, res) {
        try {
            const deleted = await oportunidadeService.deleteOportunidade(req.params.id);
            if (!deleted) return res.status(404).json({ error: 'Oportunidade não encontrada' });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new OportunidadeController();
