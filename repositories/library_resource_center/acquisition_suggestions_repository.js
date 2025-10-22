const { SugestaoAquisicao } = require('../../models');

class SugestaoAquisicaoRepository {
  async findAll() {
    return await SugestaoAquisicao.findAll({ include: ['usuario'] });
  }

  async findById(id) {
    return await SugestaoAquisicao.findByPk(id, { include: ['usuario'] });
  }

  async create(data) {
    return await SugestaoAquisicao.create(data);
  }

  async update(id, data) {
    const sugestao = await SugestaoAquisicao.findByPk(id);
    if (!sugestao) return null;
    return await sugestao.update(data);
  }

  async delete(id) {
    const sugestao = await SugestaoAquisicao.findByPk(id);
    if (!sugestao) return null;
    await sugestao.destroy();
    return true;
  }
}

module.exports = new SugestaoAquisicaoRepository();
