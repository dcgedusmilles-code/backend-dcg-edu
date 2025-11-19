const { Endereco } = require("../../models");

class AddressRepository {
  create(data) {
    return Endereco.create(data);
  }
  findAll() {
    return Endereco.findAll();
  }
  findById(id) {
    return Endereco.findByPk(id);
  }
  update(id, data) {
    return Endereco.update(data, { where: { id } });
  }
  delete(id) {
    return Endereco.destroy({ where: { id } });
  }
}

module.exports = new AddressRepository();
