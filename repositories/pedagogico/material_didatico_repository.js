const { MaterialDidatico } = require("../../models");

class MaterialDidaticoRepository {
  findAll() {
    return MaterialDidatico.findAll();
  }

  findById(id) {
    return MaterialDidatico.findByPk(id);
  }

  create(data) {
    return MaterialDidatico.create(data);
  }

  update(id, data) {
    return MaterialDidatico.update(data, { where: { id } });
  }

  delete(id) {
    return MaterialDidatico.destroy({ where: { id } });
  }
}

module.exports = new MaterialDidaticoRepository();
