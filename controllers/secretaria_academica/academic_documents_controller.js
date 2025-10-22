const service = require('../../services/secretaria_academica/academic_documents_service');

class DocumentoAcademicoController {
    async create(req, res) {
        try {
            const doc = await service.create(req.body);
            res.status(201).json(doc);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const docs = await service.getAll();
        res.json(docs);
    }

    async getById(req, res) {
        try {
            const doc = await service.getById(req.params.id);
            res.json(doc);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await service.update(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await service.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new DocumentoAcademicoController();
