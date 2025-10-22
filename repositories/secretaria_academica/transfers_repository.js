const { Transferencia } = require('../../models');

class TransferenciaRepository {
    async findAll() {
        return await Transferencia.findAll({ include: ['aluno'] });
    }

    async findById(id) {
        return await Transferencia.findByPk(id, { include: ['aluno'] });
    }

    async create(data) {
        return await Transferencia.create(data);
    }

    async update(id, data) {
        const transferencia = await Transferencia.findByPk(id);
        if (!transferencia) return null;
        return await transferencia.update(data);
    }

    async delete(id) {
        const transferencia = await Transferencia.findByPk(id);
        if (!transferencia) return null;
        await transferencia.destroy();
        return true;
    }
}

module.exports = new TransferenciaRepository();
