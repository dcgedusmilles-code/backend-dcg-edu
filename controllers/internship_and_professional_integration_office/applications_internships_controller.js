const candidaturaService = require('../../services/internship_and_professional_integration_office/applications_internships_service');

class CandidaturaEstagioController {
    async listar(req, res) {
        try {
            const dados = await candidaturaService.listar();
            res.status(200).json(dados);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obterPorId(req, res) {
        try {
            const { id } = req.params;
            const candidatura = await candidaturaService.obterPorId(id);
            res.status(200).json(candidatura);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async criar(req, res) {
        try {
            const nova = await candidaturaService.criar(req.body);
            res.status(201).json(nova);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const atualizada = await candidaturaService.atualizar(id, req.body);
            res.status(200).json(atualizada);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async remover(req, res) {
        try {
            const { id } = req.params;
            await candidaturaService.remover(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new CandidaturaEstagioController();
