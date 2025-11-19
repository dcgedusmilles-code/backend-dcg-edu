const { Unidade, Address } = require("../../models");

class UnitRepository {
  create(data) {
    return Unidade.create(data);
  }

  findAll() {
    return Unidade.findAll({ include: ["endereco"] });
  }

  findById(id) {
    return Unidade.findByPk(id, { include: ["endereco"] });
  }

  update(id, data) {
    return Unidade.update(data, { where: { id } });
  }

  delete(id) {
    return Unidade.destroy({ where: { id } });
  }
}

module.exports = new UnitRepository();
