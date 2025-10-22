const { AcompanhamentoAcademico } = require('../../models');

class AcompanhamentoAcademicoRepository {
    async findAll() {
        return await AcompanhamentoAcademico.findAll({ include: ['estudante'] });
    }

    async findById(id) {
        return await AcompanhamentoAcademico.findByPk(id, { include: ['estudante'] });
    }

    async create(data) {
        return await AcompanhamentoAcademico.create(data);
    }

    async update(id, data) {
        const item = await AcompanhamentoAcademico.findByPk(id);
        if (!item) return null;
        return await item.update(data);
    }

    async delete(id) {
        const item = await AcompanhamentoAcademico.findByPk(id);
        if (!item) return null;
        await item.destroy();
        return true;
    }
}

module.exports = new AcompanhamentoAcademicoRepository();
