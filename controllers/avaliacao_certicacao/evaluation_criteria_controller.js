'use strict';

const criterioAvaliacaoService = require('../../services/avaliacao_certicacao/evaluation_criteria_service');

class CriterioAvaliacaoController {
    /**
     * Lista todos os critérios de avaliação
     */
    async listar(req, res) {
        try {
            const filtros = req.query || {};
            const criterios = await criterioAvaliacaoService.getAll(filtros);
            res.json(criterios);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca um critério de avaliação pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const criterio = await criterioAvaliacaoService.getById(req.params.id);
            if (!criterio) {
                return res.status(404).json({ message: 'Critério de avaliação não encontrado' });
            }
            res.json(criterio);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria um novo critério de avaliação
     */
    async criar(req, res) {
        try {
            const criterio = await criterioAvaliacaoService.create(req.body);
            res.status(201).json(criterio);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza um critério de avaliação existente
     */
    async atualizar(req, res) {
        try {
            const criterio = await criterioAvaliacaoService.update(req.params.id, req.body);
            if (!criterio) {
                return res.status(404).json({ message: 'Critério de avaliação não encontrado' });
            }
            res.json(criterio);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove um critério de avaliação
     */
    async remover(req, res) {
        try {
            const deleted = await criterioAvaliacaoService.delete(req.params.id);
            if (!deleted) {
                return res.status(404).json({ message: 'Critério de avaliação não encontrado' });
            }
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new CriterioAvaliacaoController();
