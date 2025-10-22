const segurancaTIService = require('../../services/it_department/it_security_service');

class SegurancaTIController {
    async criar(req, res) {
        try {
            const novo = await segurancaTIService.criar(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async listar(req, res) {
        const lista = await segurancaTIService.listar();
        res.json(lista);
    }

    async buscarPorId(req, res) {
        try {
            const registro = await segurancaTIService.buscarPorId(req.params.id);
            res.json(registro);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizado = await segurancaTIService.atualizar(req.params.id, req.body);
            res.json(atualizado);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async deletar(req, res) {
        try {
            await segurancaTIService.deletar(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}

module.exports = new SegurancaTIController();
