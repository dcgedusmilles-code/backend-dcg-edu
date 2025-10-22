const { MetaComercial } = require('../../models');

class MetaComercialRepository {
    async findAll(filters = {}) {
        try {
            return await MetaComercial.findAll({
                where: filters,
                include: ['responsavel'],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar metas comerciais: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await MetaComercial.findByPk(id, {
                include: ['responsavel']
            });
        } catch (err) {
            throw new Error(`Erro ao buscar meta comercial: ${err.message}`);
        }
    }

    async create(data) {
        try {
            return await MetaComercial.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar meta comercial: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const meta = await MetaComercial.findByPk(id);
            if (!meta) return null;

            await meta.update(data);
            return meta;
        } catch (err) {
            throw new Error(`Erro ao atualizar meta comercial: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const meta = await MetaComercial.findByPk(id);
            if (!meta) return null;

            await meta.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir meta comercial: ${err.message}`);
        }
    }
}

module.exports = new MetaComercialRepository();
