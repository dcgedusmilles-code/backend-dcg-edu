const { EventoBiblioteca } = require('../../models');

class EventoBibliotecaRepository {
    async findAll() {
        return await EventoBiblioteca.findAll({ include: ['responsavelEvento'] });
    }

    async findById(id) {
        return await EventoBiblioteca.findByPk(id, { include: ['responsavelEvento'] });
    }

    async create(data) {
        return await EventoBiblioteca.create(data);
    }

    async update(id, data) {
        const evento = await EventoBiblioteca.findByPk(id);
        if (!evento) return null;
        return await evento.update(data);
    }

    async delete(id) {
        const evento = await EventoBiblioteca.findByPk(id);
        if (!evento) return null;
        await evento.destroy();
        return true;
    }
}

module.exports = new EventoBibliotecaRepository();
