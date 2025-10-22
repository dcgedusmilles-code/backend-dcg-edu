const planoDeAulaService = require('../../services/pedagogico/lesson_plan_service');

class PlanoDeAulaController {
  async criar(req, res) {
    try {
      const plano = await planoDeAulaService.criarPlano(req.body);
      res.status(201).json(plano);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async listar(req, res) {
    const planos = await planoDeAulaService.listarPlanos();
    res.json(planos);
  }

  async obter(req, res) {
    try {
      const plano = await planoDeAulaService.obterPlano(req.params.id);
      res.json(plano);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async atualizar(req, res) {
    try {
      const plano = await planoDeAulaService.atualizarPlano(req.params.id, req.body);
      res.json(plano);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async deletar(req, res) {
    try {
      await planoDeAulaService.deletarPlano(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new PlanoDeAulaController();
