const { Unit, Address } = require("../models");

class UnitRepository {
  create(data) {
    return Unit.create(data);
  }

  findAll() {
    return Unit.findAll({ include: ["endereco"] });
  }

  findById(id) {
    return Unit.findByPk(id, { include: ["endereco"] });
  }

  update(id, data) {
    return Unit.update(data, { where: { id } });
  }

  delete(id) {
    return Unit.destroy({ where: { id } });
  }
}

module.exports = new UnitRepository();
