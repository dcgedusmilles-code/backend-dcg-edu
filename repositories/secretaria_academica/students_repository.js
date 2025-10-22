const { Aluno } = require('../../models');

class AlunoRepository {
    async create(data) {
        return await Aluno.create(data);
    }

    async findAll() {
        return await Aluno.findAll();
    }

    async findById(id) {
        return await Aluno.findByPk(id);
    }

    async update(id, data) {
        const aluno = await Aluno.findByPk(id);
        if (!aluno) return null;
        return await aluno.update(data);
    }

    async delete(id) {
        const aluno = await Aluno.findByPk(id);
        if (!aluno) return null;
        await aluno.destroy();
        return true;
    }
}

module.exports = new AlunoRepository();
