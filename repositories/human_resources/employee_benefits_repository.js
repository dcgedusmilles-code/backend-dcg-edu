'use strict';
const { FuncionarioBeneficio } = require('../../models');

class FuncionarioBeneficioRepository {
    async create(data) {
        return await FuncionarioBeneficio.create(data);
    }

    async findAll() {
        return await FuncionarioBeneficio.findAll({ include: ['funcionario', 'beneficio'] });
    }

    async findById(id) {
        return await FuncionarioBeneficio.findByPk(id, { include: ['funcionario', 'beneficio'] });
    }

    async update(id, data) {
        const registro = await FuncionarioBeneficio.findByPk(id);
        if (!registro) return null;
        return await registro.update(data);
    }

    async delete(id) {
        const registro = await FuncionarioBeneficio.findByPk(id);
        if (!registro) return null;
        await registro.destroy();
        return registro;
    }
}

module.exports = new FuncionarioBeneficioRepository();
