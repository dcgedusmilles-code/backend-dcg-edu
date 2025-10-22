const { EventoApoio } = require('../../models');

class EventoApoioRepository {
    async findAll() {
        return await EventoApoio.findAll({
            include: ['responsavel_orientador', 'responsavel_funcionario']
        });
    }

    async findById(id) {
        return await EventoApoio.findByPk(id, {
            include: ['responsavel_orientador', 'responsavel_funcionario']
        });
    }

    async create(data) {
        return await EventoApoio.create(data);
    }

    async update(id, data) {
        const evento = await this.findById(id);
        if (!evento) return null;
        return await evento.update(data);
    }

    async delete(id) {
        const evento = await this.findById(id);
        if (!evento) return null;
        await evento.destroy();
        return true;
    }
}

module.exports = new EventoApoioRepository();
