const eventoApoioService = require('../../services/student_support_office/events_support_service');

class EventoApoioController {
    async listar(req, res) {
        const eventos = await eventoApoioService.listar();
        return res.json(eventos);
    }

    async obter(req, res) {
        try {
            const evento = await eventoApoioService.obterPorId(req.params.id);
            return res.json(evento);
        } catch (e) {
            return res.status(404).json({ erro: e.message });
        }
    }

    async criar(req, res) {
        try {
            const novo = await eventoApoioService.criar(req.body);
            return res.status(201).json(novo);
        } catch (e) {
            return res.status(400).json({ erro: e.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizado = await eventoApoioService.atualizar(req.params.id, req.body);
            return res.json(atualizado);
        } catch (e) {
            return res.status(400).json({ erro: e.message });
        }
    }

    async excluir(req, res) {
        try {
            await eventoApoioService.excluir(req.params.id);
            return res.status(204).send();
        } catch (e) {
            return res.status(404).json({ erro: e.message });
        }
    }
}

module.exports = new EventoApoioController();
