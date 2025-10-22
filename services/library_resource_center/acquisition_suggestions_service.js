const repository = require('../../repositories/library_resource_center/acquisition_suggestions_repository');

class SugestaoAquisicaoService {
  async listarSugestoes() {
    return await repository.findAll();
  }

  async obterSugestao(id) {
    const sugestao = await repository.findById(id);
    if (!sugestao) throw new Error('Sugestão não encontrada');
    return sugestao;
  }

  async criarSugestao(data) {
    return await repository.create(data);
  }

  async atualizarSugestao(id, data) {
    const sugestao = await repository.update(id, data);
    if (!sugestao) throw new Error('Sugestão não encontrada');
    return sugestao;
  }

  async excluirSugestao(id) {
    const sucesso = await repository.delete(id);
    if (!sucesso) throw new Error('Sugestão não encontrada');
    return true;
  }
}

module.exports = new SugestaoAquisicaoService();
