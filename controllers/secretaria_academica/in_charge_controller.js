const encarregadoService = require('../../services/secretaria_academica/in_charge_service');

class EncarregadoController {
  async create(req, res) {
    try {
      const result = await encarregadoService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const result = await encarregadoService.findAll();
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const result = await encarregadoService.findById(req.params.id);
      return res.json(result);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const result = await encarregadoService.update(req.params.id, req.body);
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await encarregadoService.delete(req.params.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new EncarregadoController();
