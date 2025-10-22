const { ObraInfraestrutura, Local, Fornecedor } = require('../../models');

class ObraInfraestruturaRepository {
    async findAll() {
        return await ObraInfraestrutura.findAll({
            include: [
                { model: Local, as: 'local' },
                { model: Fornecedor, as: 'fornecedor_info' },
            ],
        });
    }

    async findById(id) {
        return await ObraInfraestrutura.findByPk(id, {
            include: [
                { model: Local, as: 'local' },
                { model: Fornecedor, as: 'fornecedor_info' },
            ],
        });
    }

    async create(data) {
        return await ObraInfraestrutura.create(data);
    }

    async update(id, data) {
        const obra = await ObraInfraestrutura.findByPk(id);
        if (!obra) return null;
        return await obra.update(data);
    }

    async delete(id) {
        const obra = await ObraInfraestrutura.findByPk(id);
        if (!obra) return null;
        await obra.destroy();
        return obra;
    }
}

module.exports = new ObraInfraestruturaRepository();
