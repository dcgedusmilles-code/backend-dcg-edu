const ContaReceberService = require('../../services/financeiro/conta_receber_service');

class ContaReceberController {
  async listar(req, res) {
    try {
      const list = await ContaReceberService.listarTodos();
      return res.json(list);
    } catch (err) {
      console.error('Erro listar contas a receber:', err);
      return res.status(500).json({ error: 'Erro ao listar contas a receber' });
    }
  }

  async obter(req, res) {
    try {
      const { id } = req.params;
      const item = await ContaReceberService.findById ? await ContaReceberService.findById(id) : null;
      if (!item) return res.status(404).json({ error: 'Conta a receber não encontrada' });
      return res.json(item);
    } catch (err) {
      console.error('Erro obter conta a receber:', err);
      return res.status(500).json({ error: 'Erro ao obter conta a receber' });
    }
  }

  async criar(req, res) {
    try {
      const created = await ContaReceberService.criar(req.body);
      return res.status(201).json(created);
    } catch (err) {
      console.error('Erro criar conta a receber:', err);
      return res.status(400).json({ error: err.message || 'Erro ao criar' });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const updated = await ContaReceberService.atualizar(id, req.body);
      return res.json(updated);
    } catch (err) {
      console.error('Erro atualizar conta a receber:', err);
      return res.status(400).json({ error: err.message || 'Erro ao atualizar' });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await ContaReceberService.deletar(id);
      return res.status(204).send();
    } catch (err) {
      console.error('Erro deletar conta a receber:', err);
      return res.status(400).json({ error: err.message || 'Erro ao deletar' });
    }
  }

  async pendentes(req, res) {
    try {
      const pendentes = await ContaReceberService.pendentes();
      return res.json(pendentes);
    } catch (err) {
      console.error('Erro contas receber pendentes:', err);
      return res.status(500).json({ error: 'Erro ao buscar pendentes' });
    }
  }

  async totalPendentes(req, res) {
    try {
      const total = await ContaReceberService.totalPendentes();
      return res.json({ total_pendentes: parseFloat(total || 0) });
    } catch (err) {
      console.error('Erro total pendentes receber:', err);
      return res.status(500).json({ error: 'Erro ao calcular total pendentes' });
    }
  }
}

module.exports = new ContaReceberController();
