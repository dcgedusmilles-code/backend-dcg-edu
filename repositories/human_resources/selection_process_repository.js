const { ProcessoSeletivo } = require('../../models');

class ProcessoSeletivoRepository {
    async create(data) {
        return await ProcessoSeletivo.create(data);
    }

    async findAll() {
        return await ProcessoSeletivo.findAll({ include: ['vaga', 'candidato'] });
    }

    async findById(id) {
        return await ProcessoSeletivo.findByPk(id, { include: ['vaga', 'candidato'] });
    }

    async update(id, data) {
        const registro = await ProcessoSeletivo.findByPk(id);
        if (!registro) return null;
        return await registro.update(data);
    }

    async delete(id) {
        const registro = await ProcessoSeletivo.findByPk(id);
        if (!registro) return null;
        await registro.destroy();
        return true;
    }
}

module.exports = new ProcessoSeletivoRepository();
