const { PlanoDeAula } = require('../../models');

class PlanoDeAulaRepository {
    async findAll() {
        return await PlanoDeAula.findAll({
            include: ['disciplina', 'professor', 'turma'],
        });
    }

    async findById(id) {
        return await PlanoDeAula.findByPk(id, {
            include: ['disciplina', 'professor', 'turma'],
        });
    }

    async create(data) {
        return await PlanoDeAula.create(data);
    }

    async update(id, data) {
        const plano = await this.findById(id);
        if (!plano) return null;
        return await plano.update(data);
    }

    async delete(id) {
        const plano = await this.findById(id);
        if (!plano) return null;
        await plano.destroy();
        return plano;
    }
}

module.exports = new PlanoDeAulaRepository();
