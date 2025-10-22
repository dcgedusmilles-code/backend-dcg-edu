'use strict';
const { PesquisaMercado } = require('../../models');

class PesquisaMercadoRepository {
    async create(data) {
        return await PesquisaMercado.create(data);
    }

    async findAll() {
        return await PesquisaMercado.findAll();
    }

    async findById(id) {
        return await PesquisaMercado.findByPk(id);
    }

    async update(id, data) {
        const pesquisa = await PesquisaMercado.findByPk(id);
        if (!pesquisa) return null;
        await pesquisa.update(data);
        return pesquisa;
    }

    async delete(id) {
        const pesquisa = await PesquisaMercado.findByPk(id);
        if (!pesquisa) return null;
        await pesquisa.destroy();
        return true;
    }
}

module.exports = new PesquisaMercadoRepository();
