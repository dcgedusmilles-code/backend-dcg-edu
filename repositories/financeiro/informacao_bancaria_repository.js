const { InformacaoBancaria } = require("../../models");

class InformacaoBancariaRepository {
  async create(data) {
    return InformacaoBancaria.create(data);
  }
  async findById(id) {
    return InformacaoBancaria.findByPk(id);
  }
  async findAll(filter = {}) {
    return InformacaoBancaria.findAll({ where: filter });
  }
  async update(id, data) {
    const item = await this.findById(id);
    if (!item) throw new Error("Informação bancária não encontrada");
    return item.update(data);
  }
  async delete(id) {
    const item = await this.findById(id);
    if (!item) throw new Error("Informação bancária não encontrada");
    return item.destroy();
  }
}

module.exports = new InformacaoBancariaRepository();
