const { Address } = require("../models");

class AddressRepository {
  create(data) {
    return Address.create(data);
  }
  findAll() {
    return Address.findAll();
  }
  findById(id) {
    return Address.findByPk(id);
  }
  update(id, data) {
    return Address.update(data, { where: { id } });
  }
  delete(id) {
    return Address.destroy({ where: { id } });
  }
}

module.exports = new AddressRepository();
