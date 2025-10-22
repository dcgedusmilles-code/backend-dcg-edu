'use strict';
const eventoService = require('../../services/communication_and_marketing/events_service');

class EventoController {
    async create(req, res) {
        try {
            const evento = await eventoService.createEvento(req.body);
            return res.status(201).json(evento);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const eventos = await eventoService.listarEventos();
        return res.json(eventos);
    }

    async getById(req, res) {
        try {
            const evento = await eventoService.obterEvento(req.params.id);
            return res.json(evento);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const evento = await eventoService.atualizarEvento(req.params.id, req.body);
            return res.json(evento);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await eventoService.removerEvento(req.params.id);
            return res.status(204).send();
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new EventoController();
