const { AlunoEncarregado } = require('../../models');

class AlunoEncarregadoRepository {
  async create(data) {
    return await AlunoEncarregado.create(data);
  }

  async findAll() {
    return await AlunoEncarregado.findAll();
  }

  async findById(id) {
    return await AlunoEncarregado.findByPk(id);
  }

  async update(id, data) {
    const registro = await AlunoEncarregado.findByPk(id);
    if (!registro) return null;
    return await registro.update(data);
  }

  async delete(id) {
    const registro = await AlunoEncarregado.findByPk(id);
    if (!registro) return null;
    await registro.destroy();
    return true;
  }
}

module.exports = new AlunoEncarregadoRepository();
