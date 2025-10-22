const cursoService = require('../../services/training_coordinators/courses_service');

class CursoController {
  async criar(req, res) {
    try {
      const curso = await cursoService.criarCurso(req.body);
      res.status(201).json(curso);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  async listar(req, res) {
    const cursos = await cursoService.listarCursos();
    res.json(cursos);
  }

  async obter(req, res) {
    try {
      const curso = await cursoService.obterCursoPorId(req.params.id);
      res.json(curso);
    } catch (error) {
      res.status(404).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const curso = await cursoService.atualizarCurso(req.params.id, req.body);
      res.json(curso);
    } catch (error) {
      res.status(404).json({ erro: error.message });
    }
  }

  async excluir(req, res) {
    try {
      await cursoService.excluirCurso(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ erro: error.message });
    }
  }
}

module.exports = new CursoController();
