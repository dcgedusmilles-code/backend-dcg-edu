const { Local, Patrimonio, EstoqueLogistico, ObraInfraestrutura, SegurancaPatrimonial } = require('../../models');

class LocalRepository {
    async findAll() {
        return await Local.findAll({
            include: [
                { model: Patrimonio, as: 'patrimonios' },
                { model: EstoqueLogistico, as: 'estoque' },
                { model: ObraInfraestrutura, as: 'obras' },
                { model: SegurancaPatrimonial, as: 'seguranca' }
            ]
        });
    }

    async findById(id) {
        return await Local.findByPk(id, {
            include: [
                { model: Patrimonio, as: 'patrimonios' },
                { model: EstoqueLogistico, as: 'estoque' },
                { model: ObraInfraestrutura, as: 'obras' },
                { model: SegurancaPatrimonial, as: 'seguranca' }
            ]
        });
    }

    async create(data) {
        return await Local.create(data);
    }

    async update(id, data) {
        const local = await Local.findByPk(id);
        if (!local) return null;
        return await local.update(data);
    }

    async delete(id) {
        const local = await Local.findByPk(id);
        if (!local) return null;
        await local.destroy();
        return local;
    }
}

module.exports = new LocalRepository();
