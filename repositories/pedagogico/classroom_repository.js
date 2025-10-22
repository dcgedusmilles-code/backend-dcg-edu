const { Aula } = require('../../models');

class AulaRepository {
  async create(data) {
    return await Aula.create(data);
  }

  async findAll() {
    return await Aula.findAll({ include: ['disciplina', 'professor', 'turma'] });
  }

  async findById(id) {
    return await Aula.findByPk(id, { include: ['disciplina', 'professor', 'turma'] });
  }

  async update(id, data) {
    const aula = await Aula.findByPk(id);
    if (!aula) return null;
    return await aula.update(data);
  }

  async delete(id) {
    const aula = await Aula.findByPk(id);
    if (!aula) return null;
    await aula.destroy();
    return true;
  }
}

module.exports = new AulaRepository();
