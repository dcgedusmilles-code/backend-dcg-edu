const repository = require('../../repositories/pedagogico/academic_calendar_repository');

class CalendarioAcademicoService {
  async criarCalendario(data) {
    return await repository.create(data);
  }

  async listarCalendarios() {
    return await repository.findAll();
  }

  async obterCalendario(id) {
    return await repository.findById(id);
  }

  async atualizarCalendario(id, data) {
    return await repository.update(id, data);
  }

  async deletarCalendario(id) {
    return await repository.delete(id);
  }
}

module.exports = new CalendarioAcademicoService();
