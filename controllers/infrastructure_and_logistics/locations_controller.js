const localService = require('../../services/infrastructure_and_logistics/locations_service');

class LocalController {
    async getAll(req, res) {
        try {
            const locais = await localService.getAll();
            res.json(locais);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getById(req, res) {
        try {
            const local = await localService.getById(req.params.id);
            res.json(local);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async create(req, res) {
        try {
            const local = await localService.create(req.body);
            res.status(201).json(local);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            const local = await localService.update(req.params.id, req.body);
            res.json(local);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async delete(req, res) {
        try {
            await localService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}

module.exports = new LocalController();
