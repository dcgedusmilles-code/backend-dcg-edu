const alunoEncarregadoRepository = require('../../repositories/secretaria_academica/student_in _charge_repository');

class AlunoEncarregadoService {
  async createAlunoEncarregado(data) {
    return await alunoEncarregadoRepository.create(data);
  }

  async getAllAlunoEncarregado() {
    return await alunoEncarregadoRepository.findAll();
  }

  async getAlunoEncarregadoById(id) {
    return await alunoEncarregadoRepository.findById(id);
  }

  async updateAlunoEncarregado(id, data) {
    return await alunoEncarregadoRepository.update(id, data);
  }

  async deleteAlunoEncarregado(id) {
    return await alunoEncarregadoRepository.delete(id);
  }
}

module.exports = new AlunoEncarregadoService();
