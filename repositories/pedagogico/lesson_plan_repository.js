const { PlanoDeAula } = require('../../models');

class PlanoDeAulaRepository {
  async create(data) {
    return await PlanoDeAula.create(data);
  }

  async findAll() {
    return await PlanoDeAula.findAll({ include: ['disciplina', 'professor', 'turma'] });
  }

  async findById(id) {
    return await PlanoDeAula.findByPk(id, { include: ['disciplina', 'professor', 'turma'] });
  }

  async update(id, data) {
    const plano = await PlanoDeAula.findByPk(id);
    if (!plano) return null;
    return await plano.update(data);
  }

  async delete(id) {
    const plano = await PlanoDeAula.findByPk(id);
    if (!plano) return null;
    await plano.destroy();
    return plano;
  }
}

module.exports = new PlanoDeAulaRepository();
