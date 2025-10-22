const AvaliacaoEstagioService = require('../../services/internship_and_professional_integration_office/evaluations_internship_service');

class AvaliacaoEstagioController {
    async create(req, res) {
        try {
            const avaliacao = await AvaliacaoEstagioService.create(req.body);
            res.status(201).json(avaliacao);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const avaliacoes = await AvaliacaoEstagioService.findAll();
            res.json(avaliacoes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findById(req, res) {
        try {
            const avaliacao = await AvaliacaoEstagioService.findById(req.params.id);
            if (!avaliacao) return res.status(404).json({ message: 'Avaliação não encontrada' });
            res.json(avaliacao);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await AvaliacaoEstagioService.update(req.params.id, req.body);
            if (!updated) return res.status(404).json({ message: 'Avaliação não encontrada' });
            res.json({ message: 'Avaliação atualizada com sucesso' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await AvaliacaoEstagioService.delete(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Avaliação não encontrada' });
            res.json({ message: 'Avaliação removida com sucesso' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new AvaliacaoEstagioController();
