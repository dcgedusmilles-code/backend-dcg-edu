'use strict';
const relacaoPublicaService = require('../../services/communication_and_marketing/public_relations_service');

class RelacaoPublicaController {
    async create(req, res) {
        try {
            const rp = await relacaoPublicaService.create(req.body);
            return res.status(201).json(rp);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const rps = await relacaoPublicaService.getAll();
        return res.json(rps);
    }

    async getById(req, res) {
        const rp = await relacaoPublicaService.getById(req.params.id);
        if (!rp) return res.status(404).json({ error: 'Relação Pública não encontrada' });
        return res.json(rp);
    }

    async update(req, res) {
        const rp = await relacaoPublicaService.update(req.params.id, req.body);
        if (!rp) return res.status(404).json({ error: 'Relação Pública não encontrada' });
        return res.json(rp);
    }

    async delete(req, res) {
        const rp = await relacaoPublicaService.delete(req.params.id);
        if (!rp) return res.status(404).json({ error: 'Relação Pública não encontrada' });
        return res.json({ message: 'Relação Pública deletada com sucesso' });
    }
}

module.exports = new RelacaoPublicaController();
