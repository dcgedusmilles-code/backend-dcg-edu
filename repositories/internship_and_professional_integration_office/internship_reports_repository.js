'use strict';
const { RelatorioEstagio } = require('../../models');

class RelatorioEstagioRepository {
    async create(data) {
        return await RelatorioEstagio.create(data);
    }

    async findAll() {
        return await RelatorioEstagio.findAll({ include: ['estagio'] });
    }

    async findById(id) {
        return await RelatorioEstagio.findByPk(id, { include: ['estagio'] });
    }

    async update(id, data) {
        const relatorio = await RelatorioEstagio.findByPk(id);
        if (!relatorio) return null;
        await relatorio.update(data);
        return relatorio;
    }

    async delete(id) {
        const relatorio = await RelatorioEstagio.findByPk(id);
        if (!relatorio) return null;
        await relatorio.destroy();
        return true;
    }
}

module.exports = new RelatorioEstagioRepository();
