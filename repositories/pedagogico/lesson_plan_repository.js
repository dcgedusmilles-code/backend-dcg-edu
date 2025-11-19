const { PlanoDeAula } = require('../../models');

class PlanoDeAulaRepository {
  async create(data) {
    return await PlanoDeAula.create(data);
  }

async findAll() {
  return await Curso.findAll({ include: ['coordenador', 'turmas', 'avaliacoes', 'certificados', 'feedbacks'] });
}

async findById(id) {
  return await Curso.findByPk(id, { include: ['coordenador', 'turmas', 'avaliacoes', 'certificados', 'feedbacks'] });
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
