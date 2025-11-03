const alunoEncarregadoService = require('../../services/secretaria_academica/student_in _charge_service');

class AlunoEncarregadoController {
  async listarTodos(req, res) {
    try {
      const relacoes = await alunoEncarregadoService.listarTodos();
      res.json(relacoes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao listar relações aluno-encarregado' });
    }
  }

  async listarPorAluno(req, res) {
    try {
      const { aluno_id } = req.params;
      const relacao = await alunoEncarregadoService.listarPorAluno(aluno_id);
      res.json(relacao);
    } catch (error) {
      if (error.message === 'Relação não encontrada') {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ error: 'Erro ao buscar relação específica' });
    }
  }
}
module.exports = new AlunoEncarregadoController();
