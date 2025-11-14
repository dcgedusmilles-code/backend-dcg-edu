const unitService = require('../../services/user/unit_service');

class UnitController {
  async create(req, res) {
    try {
      const data = await unitService.create(req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }

  async list(req, res) {
    res.json(await unitService.list());
  }

  async get(req, res) {
    try {
      const data = await unitService.get(req.params.id);
      res.json(data);
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
  }

  async update(req, res) {
    res.json(await unitService.update(req.params.id, req.body));
  }

  async delete(req, res) {
    await unitService.delete(req.params.id);
    res.status(204).send();
  }
}

module.exports = new UnitController();
