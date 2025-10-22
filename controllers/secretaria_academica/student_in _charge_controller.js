const alunoEncarregadoService = require('../../services/secretaria_academica/student_in _charge_service');

class AlunoEncarregadoController {
  async create(req, res) {
    try {
      const data = await alunoEncarregadoService.createAlunoEncarregado(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const data = await alunoEncarregadoService.getAllAlunoEncarregado();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const data = await alunoEncarregadoService.getAlunoEncarregadoById(req.params.id);
      if (!data) return res.status(404).json({ message: 'Registro não encontrado' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const data = await alunoEncarregadoService.updateAlunoEncarregado(req.params.id, req.body);
      if (!data) return res.status(404).json({ message: 'Registro não encontrado' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await alunoEncarregadoService.deleteAlunoEncarregado(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Registro não encontrado' });
      res.json({ message: 'Registro excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AlunoEncarregadoController();
