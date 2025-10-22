const campanhaService = require('../../services/communication_and_marketing/campaigns_service');

class CampanhaController {
    async create(req, res) {
        try {
            const campanha = await campanhaService.createCampanha(req.body);
            res.status(201).json(campanha);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao criar campanha', error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const campanhas = await campanhaService.listarCampanhas(); c
            res.json(campanhas);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar campanhas', error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const campanha = await campanhaService.buscarCampanhaPorId(req.params.id);
            if (!campanha) return res.status(404).json({ message: 'Campanha não encontrada' });
            res.json(campanha);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar campanha', error: err.message });
        }
    }

    async update(req, res) {
        try {
            const campanha = await campanhaService.atualizarCampanha(req.params.id, req.body);
            if (!campanha) return res.status(404).json({ message: 'Campanha não encontrada' });
            res.json(campanha);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao atualizar campanha', error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await campanhaService.deletarCampanha(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Campanha não encontrada' });
            res.json({ message: 'Campanha removida com sucesso' });
        } catch (err) {
            res.status(500).json({ message: 'Erro ao deletar campanha', error: err.message });
        }
    }
}

module.exports = new CampanhaController();
