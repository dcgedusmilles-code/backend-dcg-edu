const addressService = require("../../services/user/address_service");

class AddressController {
  async create(req, res) {
    try {
      const data = await addressService.create(req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }

  async list(req, res) {
    res.json(await addressService.list());
  }

  async get(req, res) {
    try {
      const data = await addressService.get(req.params.id);
      res.json(data);
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
  }

  async update(req, res) {
    res.json(await addressService.update(req.params.id, req.body));
  }

  async delete(req, res) {
    await addressService.delete(req.params.id);
    res.status(204).send();
  }
}

module.exports = new AddressController();
