const service = require('../../services/secretaria_academica/enrollment_service');

class MatriculaController {
    async listar(req, res) {
        try {
            const dados = await service.listarTodos();
            res.json(dados);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    }

    async buscar(req, res) {
        try {
            const dado = await service.buscarPorId(req.params.id);
            res.json(dado);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async criar(req, res) {
        try {
            const novo = await service.criar(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizado = await service.atualizar(req.params.id, req.body);
            res.json(atualizado);
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

module.exports = new MatriculaController();
