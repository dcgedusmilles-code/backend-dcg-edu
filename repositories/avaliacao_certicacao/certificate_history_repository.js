const { HistoricoCertificado } = require('../../models');

class HistoricoCertificadoRepository {
  async create(data) {
    return HistoricoCertificado.create(data);
  }

  async findAll(filters = {}) {
    return HistoricoCertificado.findAll({
      where: filters,
      include: ['certificado'],
    });
  }

  async findById(id) {
    return HistoricoCertificado.findByPk(id, {
      include: ['certificado'],
    });
  }

  async update(id, data) {
    await HistoricoCertificado.update(data, { where: { id } });
    return this.findById(id);
  }

  async delete(id) {
    return HistoricoCertificado.destroy({ where: { id } });
  }
}

module.exports = new HistoricoCertificadoRepository();
