const DespesaService = require('../../services/financeiro/despesa_service');

class DespesaController {
  async listar(req, res) {
    try {
      const list = await DespesaService.listarTodos();
      return res.json(list);
    } catch (err) {
      console.error('Erro listar despesas:', err);
      return res.status(500).json({ error: 'Erro ao listar despesas' });
    }
  }

  async obter(req, res) {
    try {
      const { id } = req.params;
      const item = await DespesaService.findById ? await DespesaService.findById(id) : null;
      if (!item) return res.status(404).json({ error: 'Despesa não encontrada' });
      return res.json(item);
    } catch (err) {
      console.error('Erro obter despesa:', err);
      return res.status(500).json({ error: 'Erro ao obter despesa' });
    }
  }

  async criar(req, res) {
    try {
      const created = await DespesaService.criar(req.body);
      return res.status(201).json(created);
    } catch (err) {
      console.error('Erro criar despesa:', err);
      return res.status(400).json({ error: err.message || 'Erro ao criar despesa' });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const updated = await DespesaService.atualizar(id, req.body);
      return res.json(updated);
    } catch (err) {
      console.error('Erro atualizar despesa:', err);
      return res.status(400).json({ error: err.message || 'Erro ao atualizar despesa' });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await DespesaService.deletar(id);
      return res.status(204).send();
    } catch (err) {
      console.error('Erro deletar despesa:', err);
      return res.status(400).json({ error: err.message || 'Erro ao deletar despesa' });
    }
  }

  async totalPeriodo(req, res) {
    try {
      const { periodo_inicio, periodo_fim } = req.query;
      const total = await DespesaService.totalDespesas(periodo_inicio, periodo_fim);
      return res.json({ periodo_inicio, periodo_fim, total_despesas: parseFloat(total || 0) });
    } catch (err) {
      console.error('Erro total despesas:', err);
      return res.status(400).json({ error: err.message || 'Erro ao calcular total de despesas' });
    }
  }
}

module.exports = new DespesaController();
