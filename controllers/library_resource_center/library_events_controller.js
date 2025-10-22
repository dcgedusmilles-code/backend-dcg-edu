const eventoBibliotecaService = require('../../services/library_resource_center/library_events_service');

class EventoBibliotecaController {
    async listar(req, res) {
        try {
            const eventos = await eventoBibliotecaService.listar();
            res.json(eventos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const evento = await eventoBibliotecaService.buscarPorId(req.params.id);
            res.json(evento);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async criar(req, res) {
        try {
            const novoEvento = await eventoBibliotecaService.criar(req.body);
            res.status(201).json(novoEvento);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const evento = await eventoBibliotecaService.atualizar(req.params.id, req.body);
            res.json(evento);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await eventoBibliotecaService.deletar(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new EventoBibliotecaController();
