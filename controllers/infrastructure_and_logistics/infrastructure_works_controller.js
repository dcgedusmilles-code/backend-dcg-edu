const obraInfraestruturaService = require('../../services/infrastructure_and_logistics/infrastructure_works_service');

class ObraInfraestruturaController {
    async getAll(req, res) {
        try {
            const obras = await obraInfraestruturaService.getAll();
            res.json(obras);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getById(req, res) {
        try {
            const obra = await obraInfraestruturaService.getById(req.params.id);
            res.json(obra);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async create(req, res) {
        try {
            const obra = await obraInfraestruturaService.create(req.body);
            res.status(201).json(obra);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            const obra = await obraInfraestruturaService.update(req.params.id, req.body);
            res.json(obra);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async delete(req, res) {
        try {
            await obraInfraestruturaService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}

module.exports = new ObraInfraestruturaController();
