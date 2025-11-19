const { Curso } = require('../../models');

class CursoRepository {
  async create(data) {
    return await Curso.create(data);
  }

  async findAll() {
    return await Curso.findAll({ include: ['coordenador', 'turmas', 'avaliacoes', 'certificados', 'feedbacks'] });
  }

  async findById(id) {
    return await Curso.findByPk(id, { include: ['coordenador', 'turmas', 'avaliacoes', 'certificados', 'feedbacks'] });
  }

  async update(id, data) {
    const curso = await Curso.findByPk(id);
    if (!curso) return null;
    return await curso.update(data);
  }

  async delete(id) {
    const curso = await Curso.findByPk(id);
    if (!curso) return null;
    await curso.destroy();
    return curso;
  }
}

module.exports = new CursoRepository();
