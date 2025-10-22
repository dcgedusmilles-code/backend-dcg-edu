'use strict';
const { Evento } = require('../../models');

class EventoRepository {
  async create(data) {
    return await Evento.create(data);
  }

  async findAll() {
    return await Evento.findAll({ include: ['responsavel'] });
  }

  async findById(id) {
    return await Evento.findByPk(id, { include: ['responsavel'] });
  }

  async update(id, data) {
    const evento = await Evento.findByPk(id);
    if (!evento) return null;
    await evento.update(data);
    return evento;
  }

  async delete(id) {
    const evento = await Evento.findByPk(id);
    if (!evento) return null;
    await evento.destroy();
    return true;
  }
}

module.exports = new EventoRepository();
