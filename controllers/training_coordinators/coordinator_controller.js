const coordenadorService = require('../../services/training_coordinators/coordinator_service');

class CoordenadorController {
  async listar(req, res) {
    const coordenadores = await coordenadorService.listar();
    return res.json(coordenadores);
  }

  async obter(req, res) {
    try {
      const coordenador = await coordenadorService.obterPorId(req.params.id);
      return res.json(coordenador);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  async criar(req, res) {
    try {
      const coordenador = await coordenadorService.criar(req.body);
      return res.status(201).json(coordenador);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async atualizar(req, res) {
    try {
      const coordenador = await coordenadorService.atualizar(req.params.id, req.body);
      return res.json(coordenador);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  async deletar(req, res) {
    try {
      await coordenadorService.deletar(req.params.id);
      return res.status(204).send();
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new CoordenadorController();
