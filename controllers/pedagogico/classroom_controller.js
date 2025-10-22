const service = require('../../services/pedagogico/classroom_service');

class AulaController {
  async criar(req, res) {
    try {
      const aula = await service.criarAula(req.body);
      res.status(201).json(aula);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async listar(req, res) {
    try {
      const aulas = await service.listarAulas();
      res.status(200).json(aulas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obter(req, res) {
    try {
      const aula = await service.obterAula(req.params.id);
      if (!aula) return res.status(404).json({ message: 'Aula não encontrada' });
      res.status(200).json(aula);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const aula = await service.atualizarAula(req.params.id, req.body);
      if (!aula) return res.status(404).json({ message: 'Aula não encontrada' });
      res.status(200).json(aula);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const sucesso = await service.deletarAula(req.params.id);
      if (!sucesso) return res.status(404).json({ message: 'Aula não encontrada' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AulaController();
