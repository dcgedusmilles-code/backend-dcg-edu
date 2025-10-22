const { Professor } = require('../../models');

class ProfessorRepository {
    async create(data) {
        return await Professor.create(data);
    }

    async findAll() {
        return await Professor.findAll({ include: ['departamento', 'planos', 'aulas', 'avaliacoes'] });
    }

    async findById(id) {
        return await Professor.findByPk(id, { include: ['departamento', 'planos', 'aulas', 'avaliacoes'] });
    }

    async update(id, data) {
        const professor = await Professor.findByPk(id);
        if (!professor) return null;
        return await professor.update(data);
    }

    async delete(id) {
        const professor = await Professor.findByPk(id);
        if (!professor) return null;
        await professor.destroy();
        return professor;
    }
}

module.exports = new ProfessorRepository();
