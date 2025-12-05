const ContaPagarService = require('../../services/financeiro/conta_pagar_service');

class ContaPagarController {
  async listar(req, res) {
    try {
      const list = await ContaPagarService.listarTodos();
      return res.json(list);
    } catch (err) {
      console.error('Erro listar contas a pagar:', err);
      return res.status(500).json({ error: 'Erro ao listar contas a pagar' });
    }
  }

  async obter(req, res) {
    try {
      const { id } = req.params;
      const item = await ContaPagarService.findById ? await ContaPagarService.findById(id) : null;
      if (!item) return res.status(404).json({ error: 'Conta a pagar não encontrada' });
      return res.json(item);
    } catch (err) {
      console.error('Erro obter conta a pagar:', err);
      return res.status(500).json({ error: 'Erro ao obter conta a pagar' });
    }
  }

  async criar(req, res) {
    try {
      const created = await ContaPagarService.criar(req.body);
      return res.status(201).json(created);
    } catch (err) {
      console.error('Erro criar conta a pagar:', err);
      return res.status(400).json({ error: err.message || 'Erro ao criar' });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const updated = await ContaPagarService.atualizar(id, req.body);
      return res.json(updated);
    } catch (err) {
      console.error('Erro atualizar conta a pagar:', err);
      return res.status(400).json({ error: err.message || 'Erro ao atualizar' });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await ContaPagarService.deletar(id);
      return res.status(204).send();
    } catch (err) {
      console.error('Erro deletar conta a pagar:', err);
      return res.status(400).json({ error: err.message || 'Erro ao deletar' });
    }
  }

  async pendentes(req, res) {
    try {
      const pendentes = await ContaPagarService.pendentes();
      return res.json(pendentes);
    } catch (err) {
      console.error('Erro contas pagar pendentes:', err);
      return res.status(500).json({ error: 'Erro ao buscar pendentes' });
    }
  }

  async totalPendentes(req, res) {
    try {
      const total = await ContaPagarService.totalPendentes();
      return res.json({ total_pendentes: parseFloat(total || 0) });
    } catch (err) {
      console.error('Erro total pendentes pagar:', err);
      return res.status(500).json({ error: 'Erro ao calcular total pendentes' });
    }
  }
}

module.exports = new ContaPagarController();
