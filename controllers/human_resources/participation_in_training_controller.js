const service = require('../../services/human_resources/participation_in_training_service');

class ParticipacaoTreinamentoController {
    async create(req, res) {
        try {
            const participacao = await service.create(req.body);
            return res.status(201).json(participacao);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const participacoes = await service.getAll();
            return res.json(participacoes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const participacao = await service.getById(req.params.id);
            if (!participacao) return res.status(404).json({ message: 'Participação não encontrada' });
            return res.json(participacao);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const participacao = await service.update(req.params.id, req.body);
            if (!participacao) return res.status(404).json({ message: 'Participação não encontrada' });
            return res.json(participacao);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const participacao = await service.delete(req.params.id);
            if (!participacao) return res.status(404).json({ message: 'Participação não encontrada' });
            return res.json({ message: 'Participação removida com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ParticipacaoTreinamentoController();
