const service = require('../../services/pedagogico/academic_calendar_service');

class CalendarioAcademicoController {
  async criar(req, res) {
    try {
      const calendario = await service.criarCalendario(req.body);
      res.status(201).json(calendario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async listar(req, res) {
    try {
      const calendarios = await service.listarCalendarios();
      res.status(200).json(calendarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obter(req, res) {
    try {
      const calendario = await service.obterCalendario(req.params.id);
      if (!calendario) return res.status(404).json({ message: 'Calendário não encontrado' });
      res.status(200).json(calendario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const calendario = await service.atualizarCalendario(req.params.id, req.body);
      if (!calendario) return res.status(404).json({ message: 'Calendário não encontrado' });
      res.status(200).json(calendario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const sucesso = await service.deletarCalendario(req.params.id);
      if (!sucesso) return res.status(404).json({ message: 'Calendário não encontrado' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CalendarioAcademicoController();
