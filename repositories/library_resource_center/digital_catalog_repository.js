const { CatalogoDigital } = require('../../models');

class CatalogoDigitalRepository {
  async findAll() {
    return await CatalogoDigital.findAll();
  }

  async findById(id) {
    return await CatalogoDigital.findByPk(id);
  }

  async create(data) {
    return await CatalogoDigital.create(data);
  }

  async update(id, data) {
    const catalogo = await CatalogoDigital.findByPk(id);
    if (!catalogo) return null;
    return await catalogo.update(data);
  }

  async delete(id) {
    const catalogo = await CatalogoDigital.findByPk(id);
    if (!catalogo) return null;
    await catalogo.destroy();
    return catalogo;
  }
}

module.exports = new CatalogoDigitalRepository();
