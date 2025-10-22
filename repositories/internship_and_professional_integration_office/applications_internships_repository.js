const { CandidaturaEstagio } = require('../../models');

class CandidaturaEstagioRepository {
    async findAll() {
        return await CandidaturaEstagio.findAll({ include: ['vaga', 'estudante'] });
    }

    async findById(id) {
        return await CandidaturaEstagio.findByPk(id, { include: ['vaga', 'estudante'] });
    }

    async create(data) {
        return await CandidaturaEstagio.create(data);
    }

    async update(id, data) {
        const candidatura = await CandidaturaEstagio.findByPk(id);
        if (!candidatura) return null;
        await candidatura.update(data);
        return candidatura;
    }

    async delete(id) {
        const candidatura = await CandidaturaEstagio.findByPk(id);
        if (!candidatura) return null;
        await candidatura.destroy();
        return candidatura;
    }
}

module.exports = new CandidaturaEstagioRepository();
