const transferenciaService = require('../../services/secretaria_academica/transfers_service');

class TransferenciaController {
    async listar(req, res) {
        const data = await transferenciaService.listar();
        res.json(data);
    }

    async buscar(req, res) {
        try {
            const data = await transferenciaService.buscarPorId(req.params.id);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async criar(req, res) {
        try {
            const data = await transferenciaService.criar(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const data = await transferenciaService.atualizar(req.params.id, req.body);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async excluir(req, res) {
        try {
            await transferenciaService.excluir(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new TransferenciaController();
