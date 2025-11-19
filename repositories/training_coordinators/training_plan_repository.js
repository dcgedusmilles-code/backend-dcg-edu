const { PlanoDeTreinoAula } = require('../../models');

class PlanoDeAulaRepository {
    async findAll() {
        return await PlanoDeTreinoAula.findAll({
            include: ['disciplina', 'professor', 'turma'],
        });
    }

    async findById(id) {
        return await PlanoDeTreinoAula.findByPk(id, {
            include: ['disciplina', 'professor', 'turma'],
        });
    }

    async create(data) {
        return await PlanoDeTreinoAula.create(data);
    }

    async update(id, data) {
        const plano = await PlanoDeTreinoAula.findById(id);
        if (!plano) return null;
        return await plano.update(data);
    }

    async delete(id) {
        const plano = await PlanoDeTreinoAula.findById(id);
        if (!plano) return null;
        await plano.destroy();
        return plano;
    }
}

module.exports = new PlanoDeAulaRepository();
