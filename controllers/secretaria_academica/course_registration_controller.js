const service = require('../../services/secretaria_academica/course_registration_service');

class InscricaoDisciplinaController {
    async listar(req, res) {
        try {
            const inscricoes = await service.listarTodos();
            res.json(inscricoes);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    }

    async buscar(req, res) {
        try {
            const inscricao = await service.buscarPorId(req.params.id);
            res.json(inscricao);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async criar(req, res) {
        try {
            const nova = await service.criar(req.body);
            res.status(201).json(nova);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizada = await service.atualizar(req.params.id, req.body);
            res.json(atualizada);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async excluir(req, res) {
        try {
            await service.excluir(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }
}

module.exports = new InscricaoDisciplinaController();
