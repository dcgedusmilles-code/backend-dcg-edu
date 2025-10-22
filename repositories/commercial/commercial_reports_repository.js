const { RelatorioComercial } = require('../../models');

class RelatorioComercialRepository {
    async findAll(filters = {}) {
        try {
            return await RelatorioComercial.findAll({
                where: filters,
                order: [['createdAt', 'DESC']],
            });
        } catch (err) {
            throw new Error(`Erro ao listar relatórios comerciais: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await RelatorioComercial.findByPk(id);
        } catch (err) {
            throw new Error(`Erro ao buscar relatório comercial: ${err.message}`);
        }
    }

    async create(data) {
        try {
            return await RelatorioComercial.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar relatório comercial: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const relatorio = await RelatorioComercial.findByPk(id);
            if (!relatorio) return null;

            await relatorio.update(data);
            return relatorio;
        } catch (err) {
            throw new Error(`Erro ao atualizar relatório comercial: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const relatorio = await RelatorioComercial.findByPk(id);
            if (!relatorio) return null;

            await relatorio.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir relatório comercial: ${err.message}`);
        }
    }
}

module.exports = new RelatorioComercialRepository();
