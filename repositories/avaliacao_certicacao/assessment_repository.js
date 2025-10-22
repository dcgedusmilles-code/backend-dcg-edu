const { Avaliacao, Curso, Turma, Instrutor } = require('../../models');

class AvaliacaoRepository {
  async findAll() {
    return Avaliacao.findAll({
      include: ['curso', 'turma', 'instrutor']
    });
  }

  async findById(id) {
    return Avaliacao.findByPk(id, {
      include: ['curso', 'turma', 'instrutor']
    });
  }

  async create(data) {
    return Avaliacao.create(data);
  }

  async update(id, data) {
    const avaliacao = await Avaliacao.findByPk(id);
    if (!avaliacao) return null;
    return avaliacao.update(data);
  }

  async delete(id) {
    const avaliacao = await Avaliacao.findByPk(id);
    if (!avaliacao) return null;
    await avaliacao.destroy();
    return true;
  }
}

module.exports = new AvaliacaoRepository();
