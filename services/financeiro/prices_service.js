const precoRepository = require('../../repositories/financeiro/prices_repository');
const { Curso, Unidade } = require('../../models');

class PrecoService {
  async create(data) {
    // checar existência de curso e unidade
    const curso = await Curso.findByPk(data.curso_id);
    if (!curso) throw new Error('Curso informado não existe.');

    const unidade = await Unidade.findByPk(data.unidade_id);
    if (!unidade) throw new Error('Unidade informada não existe.');

    // validações básicas
    if (!data.preco_individual) throw new Error('Preço individual obrigatório.');

    return precoRepository.create(data);
  }

  async list(filter) {
    return precoRepository.findAll(filter);
  }

  async get(id) {
    const preco = await precoRepository.findById(id);
    if (!preco) throw new Error('Preço não encontrado.');
    return preco;
  }

  async update(id, data) {
    return precoRepository.update(id, data);
  }

  async remove(id) {
    return precoRepository.delete(id);
  }
}

module.exports = new PrecoService();
