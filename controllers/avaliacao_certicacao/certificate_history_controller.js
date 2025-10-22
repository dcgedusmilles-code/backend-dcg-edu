const historicoCertificadoService = require('../../services/avaliacao_certicacao/certificate_history_service');

class HistoricoCertificadoController {
  async index(req, res) {
    const historicos = await historicoCertificadoService.getAll(req.query);
    res.json(historicos);
  }

  async show(req, res) {
    try {
      const historico = await historicoCertificadoService.getById(req.params.id);
      res.json(historico);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const historico = await historicoCertificadoService.create(req.body);
      res.status(201).json(historico);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const historico = await historicoCertificadoService.update(req.params.id, req.body);
      res.json(historico);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await historicoCertificadoService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new HistoricoCertificadoController();
