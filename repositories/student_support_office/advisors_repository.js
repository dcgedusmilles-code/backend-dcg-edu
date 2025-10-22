const { Orientador } = require('../../models');

class OrientadorRepository {
  async findAll() {
    return await Orientador.findAll({ include: ['agendamentos', 'eventos'] });
  }

  async findById(id) {
    return await Orientador.findByPk(id, { include: ['agendamentos', 'eventos'] });
  }

  async create(data) {
    return await Orientador.create(data);
  }

  async update(id, data) {
    const orientador = await Orientador.findByPk(id);
    if (!orientador) return null;
    return await orientador.update(data);
  }

  async delete(id) {
    const orientador = await Orientador.findByPk(id);
    if (!orientador) return null;
    await orientador.destroy();
    return true;
  }
}

module.exports = new OrientadorRepository();
