const { RelacaoEmpresa, EmpresaParceira } = require('../../models');

class RelacaoEmpresaRepository {
    async findAll() {
        return await RelacaoEmpresa.findAll({ include: [{ model: EmpresaParceira, as: 'empresa' }] });
    }

    async findById(id) {
        return await RelacaoEmpresa.findByPk(id, { include: [{ model: EmpresaParceira, as: 'empresa' }] });
    }

    async create(data) {
        return await RelacaoEmpresa.create(data);
    }

    async update(id, data) {
        const relacao = await RelacaoEmpresa.findByPk(id);
        if (!relacao) return null;
        return await relacao.update(data);
    }

    async delete(id) {
        const relacao = await RelacaoEmpresa.findByPk(id);
        if (!relacao) return null;
        await relacao.destroy();
        return true;
    }
}

module.exports = new RelacaoEmpresaRepository();
