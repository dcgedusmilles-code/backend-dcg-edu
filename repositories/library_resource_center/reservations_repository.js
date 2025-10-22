const { Reserva, Exemplar, UsuarioBiblioteca } = require('../../models');

class ReservaRepository {
    async findAll() {
        return await Reserva.findAll({
            include: [
                { model: Exemplar, as: 'exemplar' },
                { model: UsuarioBiblioteca, as: 'usuario' }
            ]
        });
    }

    async findById(id) {
        return await Reserva.findByPk(id, {
            include: [
                { model: Exemplar, as: 'exemplar' },
                { model: UsuarioBiblioteca, as: 'usuario' }
            ]
        });
    }

    async create(data) {
        return await Reserva.create(data);
    }

    async update(id, data) {
        const reserva = await Reserva.findByPk(id);
        if (!reserva) return null;
        await reserva.update(data);
        return reserva;
    }

    async delete(id) {
        const reserva = await Reserva.findByPk(id);
        if (!reserva) return null;
        await reserva.destroy();
        return true;
    }
}

module.exports = new ReservaRepository();
