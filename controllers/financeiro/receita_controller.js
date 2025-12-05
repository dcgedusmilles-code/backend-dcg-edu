const ReceitaService = require('../../services/financeiro/receita_service');

class ReceitaController {
  async listar(req, res) {
    try {
      const receitas = await ReceitaService.listarTodos();
      return res.json(receitas);
    } catch (err) {
      console.error('Erro listar receitas:', err);
      return res.status(500).json({ error: 'Erro ao listar receitas' });
    }
  }

  async obter(req, res) {
    try {
      const { id } = req.params;
      const receita = await ReceitaService.findById ? await ReceitaService.findById(id) : null;
      if (!receita) return res.status(404).json({ error: 'Receita não encontrada' });
      return res.json(receita);
    } catch (err) {
      console.error('Erro obter receita:', err);
      return res.status(500).json({ error: 'Erro ao obter receita' });
    }
  }

  async criar(req, res) {
    try {
      const data = req.body;
      const created = await ReceitaService.criar(data);
      return res.status(201).json(created);
    } catch (err) {
      console.error('Erro criar receita:', err);
      return res.status(400).json({ error: err.message || 'Erro ao criar receita' });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updated = await ReceitaService.atualizar(id, data);
      return res.json(updated);
    } catch (err) {
      console.error('Erro atualizar receita:', err);
      return res.status(400).json({ error: err.message || 'Erro ao atualizar receita' });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await ReceitaService.deletar(id);
      return res.status(204).send();
    } catch (err) {
      console.error('Erro deletar receita:', err);
      return res.status(400).json({ error: err.message || 'Erro ao deletar receita' });
    }
  }

  // Total por período: GET /total?periodo_inicio=YYYY-MM-DD&periodo_fim=YYYY-MM-DD
  async totalPeriodo(req, res) {
    try {
      const { periodo_inicio, periodo_fim } = req.query;
      const total = await ReceitaService.totalReceitas(periodo_inicio, periodo_fim);
      return res.json({ periodo_inicio, periodo_fim, total_receitas: parseFloat(total || 0) });
    } catch (err) {
      console.error('Erro total receitas:', err);
      return res.status(400).json({ error: err.message || 'Erro ao calcular total de receitas' });
    }
  }
}

module.exports = new ReceitaController();
