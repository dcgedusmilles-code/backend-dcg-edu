const { Certificado } = require('../../models');

class CertificadoRepository {
  async create(data) {
    return Certificado.create(data);
  }

  async findAll(filters = {}) {
    return Certificado.findAll({
      where: filters,
      include: ['participante', 'curso', 'turma', 'historico'],
    });
  }

  async findById(id) {
    return Certificado.findByPk(id, {
      include: ['participante', 'curso', 'turma', 'historico'],
    });
  }

  async update(id, data) {
    await Certificado.update(data, { where: { id } });
    return this.findById(id);
  }

  async delete(id) {
    return Certificado.destroy({ where: { id } });
  }
}

module.exports = new CertificadoRepository();
