const service = require('../../services/secretaria_academica/academic_records_service');

class HistoricoAcademicoController {
  async create(req, res) {
    try {
      const record = await service.create(req.body);
      res.status(201).json(record);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    const records = await service.getAll();
    res.json(records);
  }

  async getById(req, res) {
    try {
      const record = await service.getById(req.params.id);
      res.json(record);
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

module.exports = new HistoricoAcademicoController();
