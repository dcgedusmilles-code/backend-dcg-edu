const service = require('../../services/pedagogico/material_didatico_service');

class MaterialDidaticoController {
  async listar(req, res) {
    return res.json(await service.listar());
  }

  async obter(req, res) {
    try {
      const material = await service.obter(req.params.id);
      return res.json(material);
    } catch (err) {
      return res.status(404).json({ erro: err.message });
    }
  }

  async criar(req, res) {
    try {
      const novo = await service.criar(req.body);
      return res.status(201).json(novo);
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }

  async atualizar(req, res) {
    try {
      await service.atualizar(req.params.id, req.body);
      return res.json({ mensagem: "Atualizado com sucesso" });
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }

  async remover(req, res) {
    try {
      await service.remover(req.params.id);
      return res.json({ mensagem: "Removido com sucesso" });
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }
}

module.exports = new MaterialDidaticoController();
