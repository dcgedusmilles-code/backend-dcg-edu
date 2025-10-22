const { Protocolo } = require('../../models');

class ProtocoloRepository {
    async create(data) {
        return await Protocolo.create(data);
    }

    async findAll() {
        return await Protocolo.findAll({ include: ['aluno'] });
    }

    async findById(id) {
        return await Protocolo.findByPk(id, { include: ['aluno'] });
    }

    async update(id, data) {
        const protocolo = await Protocolo.findByPk(id);
        if (!protocolo) return null;
        await protocolo.update(data);
        return protocolo;
    }

    async delete(id) {
        const protocolo = await Protocolo.findByPk(id);
        if (!protocolo) return null;
        await protocolo.destroy();
        return protocolo;
    }
}

module.exports = new ProtocoloRepository();
