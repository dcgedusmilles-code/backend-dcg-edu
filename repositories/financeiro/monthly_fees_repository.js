const { Mensalidade, Aluno, Curso, Inadimplencia } = require('../../models');

class MensalidadeRepository {
    async create(data) {
        return await Mensalidade.create(data);
    }

    async findAll() {
        return await Mensalidade.findAll({
            include: [
                { model: Aluno, as: 'aluno' },
                { model: Curso, as: 'curso' },
                { model: Inadimplencia, as: 'inadimplencias' }
            ]
        });
    }

    async findById(id) {
        return await Mensalidade.findByPk(id, {
            include: [
                { model: Aluno, as: 'aluno' },
                { model: Curso, as: 'curso' },
                { model: Inadimplencia, as: 'inadimplencias' }
            ]
        });
    }

    async update(id, data) {
        const mensalidade = await Mensalidade.findByPk(id);
        if (!mensalidade) return null;
        return await mensalidade.update(data);
    }

    async delete(id) {
        return await Mensalidade.destroy({ where: { id } });
    }
}

module.exports = new MensalidadeRepository();
