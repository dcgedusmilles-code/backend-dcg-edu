const { Disciplina } = require('../../models');

class DisciplinaRepository {
    async create(data) {
        return await Disciplina.create(data);
    }

    async findAll() {
        return await Disciplina.findAll({ include: ['curso', 'planos', 'aulas', 'avaliacoes'] });
    }

    async findById(id) {
        return await Disciplina.findByPk(id, { include: ['curso', 'planos', 'aulas', 'avaliacoes'] });
    }

    async update(id, data) {
        const disciplina = await Disciplina.findByPk(id);
        if (!disciplina) return null;
        return await disciplina.update(data);
    }

    async delete(id) {
        const disciplina = await Disciplina.findByPk(id);
        if (!disciplina) return null;
        await disciplina.destroy();
        return disciplina;
    }
}

module.exports = new DisciplinaRepository();
