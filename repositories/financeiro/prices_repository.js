const { Preco } = require('../../models');

class PrecoRepository {
  async create(data) {
    return Preco.create(data);
  }

  async findById(id) {
    return Preco.findByPk(id);
  }

  async findAll(filter = {}) {
    return Preco.findAll({ where: filter });
  }

  async update(id, data) {
    const preco = await this.findById(id);
    if (!preco) throw new Error('Preço não encontrado');
    return preco.update(data);
  }

  async delete(id) {
    const preco = await this.findById(id);
    if (!preco) throw new Error('Preço não encontrado');
    return preco.destroy();
  }
}

module.exports = new PrecoRepository();
