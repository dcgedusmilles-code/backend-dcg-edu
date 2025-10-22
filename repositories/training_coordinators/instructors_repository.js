const { Instrutor } = require('../../models');

class InstrutorRepository {
    async create(data) {
        return await Instrutor.create(data);
    }

    async findAll() {
        return await Instrutor.findAll({ include: ['departamento', 'planos', 'avaliacoes', 'feedbacks'] });
    }

    async findById(id) {
        return await Instrutor.findByPk(id, { include: ['departamento', 'planos', 'avaliacoes', 'feedbacks'] });
    }

    async update(id, data) {
        const instrutor = await Instrutor.findByPk(id);
        if (!instrutor) return null;
        return await instrutor.update(data);
    }

    async delete(id) {
        const instrutor = await Instrutor.findByPk(id);
        if (!instrutor) return null;
        await instrutor.destroy();
        return instrutor;
    }
}

module.exports = new InstrutorRepository();
