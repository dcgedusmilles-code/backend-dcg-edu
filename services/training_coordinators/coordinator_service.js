const coordenadorRepository = require('../../repositories/training_coordinators/coordinator_repository');

class CoordenadorService {
  async listar() {
    return coordenadorRepository.findAll();
  }

  async obterPorId(id) {
    const coordenador = await coordenadorRepository.findById(id);
    if (!coordenador) throw new Error('Coordenador não encontrado');
    return coordenador;
  }

  async criar(dados) {
    if (!dados.nome || !dados.email)
      throw new Error('Campos obrigatórios ausentes: nome, email');
    return coordenadorRepository.create(dados);
  }

  async atualizar(id, dados) {
    const coordenador = await coordenadorRepository.update(id, dados);
    if (!coordenador) throw new Error('Coordenador não encontrado');
    return coordenador;
  }

  async deletar(id) {
    const coordenador = await coordenadorRepository.delete(id);
    if (!coordenador) throw new Error('Coordenador não encontrado');
    return true;
  }
}

module.exports = new CoordenadorService();
