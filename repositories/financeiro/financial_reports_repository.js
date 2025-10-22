const { RelatorioFinanceiro, DepartamentoFinanceiro } = require('../../models');

class RelatorioFinanceiroRepository {
    async create(data) {
        return await RelatorioFinanceiro.create(data);
    }

    async findAll() {
        return await RelatorioFinanceiro.findAll({
            include: [{ model: DepartamentoFinanceiro, as: 'departamento' }]
        });
    }

    async findById(id) {
        return await RelatorioFinanceiro.findByPk(id, {
            include: [{ model: DepartamentoFinanceiro, as: 'departamento' }]
        });
    }

    async update(id, data) {
        const relatorio = await this.findById(id);
        if (!relatorio) return null;
        return await relatorio.update(data);
    }

    async delete(id) {
        const relatorio = await this.findById(id);
        if (!relatorio) return null;
        await relatorio.destroy();
        return true;
    }
}

module.exports = new RelatorioFinanceiroRepository();
