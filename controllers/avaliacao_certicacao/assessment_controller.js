const avaliacaoService = require('../../services/avaliacao_certicacao/assessment_service');

class AvaliacaoController {
  async index(req, res) {
    const avaliacoes = await avaliacaoService.getAll();
    res.json(avaliacoes);
  }

  async show(req, res) {
    try {
      const avaliacao = await avaliacaoService.getById(req.params.id);
      res.json(avaliacao);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async create(req, res) {
    const avaliacao = await avaliacaoService.create(req.body);
    res.status(201).json(avaliacao);
  }

  async update(req, res) {
    try {
      const avaliacao = await avaliacaoService.update(req.params.id, req.body);
      res.json(avaliacao);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await avaliacaoService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new AvaliacaoController();
