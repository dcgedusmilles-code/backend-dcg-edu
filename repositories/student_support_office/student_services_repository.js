const { AtendimentoEstudante } = require('../../models');

class AtendimentoEstudanteRepository {
    async findAll() {
        return await AtendimentoEstudante.findAll({ include: ['estudante', 'responsavel_info'] });
    }

    async findById(id) {
        return await AtendimentoEstudante.findByPk(id, { include: ['estudante', 'responsavel_info'] });
    }

    async create(data) {
        return await AtendimentoEstudante.create(data);
    }

    async update(id, data) {
        const registro = await this.findById(id);
        if (!registro) return null;
        return await registro.update(data);
    }

    async delete(id) {
        const registro = await this.findById(id);
        if (!registro) return null;
        await registro.destroy();
        return registro;
    }
}

module.exports = new AtendimentoEstudanteRepository();
