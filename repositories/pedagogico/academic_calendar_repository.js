const { CalendarioAcademico } = require('../../models');

class CalendarioAcademicoRepository {
  async create(data) {
    return await CalendarioAcademico.create(data);
  }

  async findAll() {
    return await CalendarioAcademico.findAll();
  }

  async findById(id) {
    return await CalendarioAcademico.findByPk(id);
  }

  async update(id, data) {
    const record = await CalendarioAcademico.findByPk(id);
    if (!record) return null;
    return await record.update(data);
  }

  async delete(id) {
    const record = await CalendarioAcademico.findByPk(id);
    if (!record) return null;
    await record.destroy();
    return true;
  }
}

module.exports = new CalendarioAcademicoRepository();
