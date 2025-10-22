const { Encarregado } = require('../../models');

class EncarregadoRepository {
  async create(data) {
    return await Encarregado.create(data);
  }

  async findAll() {
    return await Encarregado.findAll({ include: ['alunos'] });
  }

  async findById(id) {
    return await Encarregado.findByPk(id, { include: ['alunos'] });
  }

  async update(id, data) {
    const encarregado = await Encarregado.findByPk(id);
    if (!encarregado) return null;
    await encarregado.update(data);
    return encarregado;
  }

  async delete(id) {
    const encarregado = await Encarregado.findByPk(id);
    if (!encarregado) return null;
    await encarregado.destroy();
    return encarregado;
  }
}

module.exports = new EncarregadoRepository();
