const { CriterioAvaliacao } = require('../../models');

class CriterioAvaliacaoRepository {
  async create(data) {
    return CriterioAvaliacao.create(data);
  }

  async findAll(filters = {}) {
    return CriterioAvaliacao.findAll({
      where: filters,
      include: ['avaliacao'],
    });
  }

  async findById(id) {
    return CriterioAvaliacao.findByPk(id, {
      include: ['avaliacao'],
    });
  }

  async update(id, data) {
    await CriterioAvaliacao.update(data, { where: { id } });
    return this.findById(id);
  }

  async delete(id) {
    return CriterioAvaliacao.destroy({ where: { id } });
  }
}

module.exports = new CriterioAvaliacaoRepository();
