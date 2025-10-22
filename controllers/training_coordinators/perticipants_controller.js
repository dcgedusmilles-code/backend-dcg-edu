const participanteService = require('../../services/training_coordinators/perticipants_service');

class ParticipanteController {
    async criar(req, res) {
        try {
            const participante = await participanteService.criar(req.body);
            res.status(201).json(participante);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async listar(req, res) {
        const participantes = await participanteService.listar();
        res.json(participantes);
    }

    async obter(req, res) {
        try {
            const participante = await participanteService.obterPorId(req.params.id);
            res.json(participante);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const participante = await participanteService.atualizar(req.params.id, req.body);
            res.json(participante);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async excluir(req, res) {
        try {
            await participanteService.excluir(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }
}

module.exports = new ParticipanteController();
