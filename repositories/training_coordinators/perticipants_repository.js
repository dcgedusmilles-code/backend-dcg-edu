const { Participante } = require('../../models');

class ParticipanteRepository {
    async create(data) {
        return await Participante.create(data);
    }

    async findAll() {
        return await Participante.findAll({
            include: ['inscricoes', 'resultados', 'certificados', 'feedbacks']
        });
    }

    async findById(id) {
        return await Participante.findByPk(id, {
            include: ['inscricoes', 'resultados', 'certificados', 'feedbacks']
        });
    }

    async update(id, data) {
        const participante = await Participante.findByPk(id);
        if (!participante) return null;
        return await participante.update(data);
    }

    async delete(id) {
        const participante = await Participante.findByPk(id);
        if (!participante) return null;
        await participante.destroy();
        return participante;
    }
}

module.exports = new ParticipanteRepository();
