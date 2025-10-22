const turmaService = require('../../services/training_coordinators/class_teacher_service');

class TurmaController {
  async listar(req, res) {
    const turmas = await turmaService.listar();
    return res.json(turmas);
  }

  async obter(req, res) {
    try {
      const turma = await turmaService.obterPorId(req.params.id);
      return res.json(turma);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  async criar(req, res) {
    try {
      const turma = await turmaService.criar(req.body);
      return res.status(201).json(turma);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async atualizar(req, res) {
    try {
      const turma = await turmaService.atualizar(req.params.id, req.body);
      return res.json(turma);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  async deletar(req, res) {
    try {
      await turmaService.deletar(req.params.id);
      return res.status(204).send();
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new TurmaController();
