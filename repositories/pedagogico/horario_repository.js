const { Horario } = require("../../models");

class HorarioRepository {
  async create(data) {
    return Horario.create(data);
  }
  async findById(id) {
    return Horario.findByPk(id);
  }
  async findAll(filter = {}) {
    return Horario.findAll({ where: filter });
  }
  async update(id, data) {
    const h = await this.findById(id);
    if (!h) throw new Error("Horário não encontrado");
    return h.update(data);
  }
  async delete(id) {
    const h = await this.findById(id);
    if (!h) throw new Error("Horário não encontrado");
    return h.destroy();
  }
}

module.exports = new HorarioRepository();
