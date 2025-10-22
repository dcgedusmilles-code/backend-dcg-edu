const protocoloService = require('../../services/secretaria_academica/protocol_service');

class ProtocoloController {
    async create(req, res) {
        try {
            const result = await protocoloService.create(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const result = await protocoloService.findAll();
            return res.json(result);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const result = await protocoloService.findById(req.params.id);
            return res.json(result);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const result = await protocoloService.update(req.params.id, req.body);
            return res.json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await protocoloService.delete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new ProtocoloController();
