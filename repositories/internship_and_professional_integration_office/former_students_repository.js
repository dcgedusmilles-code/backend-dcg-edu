const { ExAluno } = require('../../models');

class ExAlunoRepository {
    async create(data) {
        return await ExAluno.create(data);
    }

    async findAll() {
        return await ExAluno.findAll({ include: ['estudante'] });
    }

    async findById(id) {
        return await ExAluno.findByPk(id, { include: ['estudante'] });
    }

    async update(id, data) {
        const [rows] = await ExAluno.update(data, { where: { id } });
        return rows > 0;
    }

    async delete(id) {
        return await ExAluno.destroy({ where: { id } });
    }
}

module.exports = new ExAlunoRepository();
