const { Contrato, Cliente, Funcionario, Venda } = require('../../models');

class ContratoRepository {
    async findAll(filters = {}) {
        try {
            return await Contrato.findAll({
                where: filters,
                include: [
                    { model: Cliente, as: 'cliente' },
                    { model: Funcionario, as: 'responsavel' },
                    { model: Venda, as: 'vendas' }
                ],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar contratos: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await Contrato.findByPk(id, {
                include: [
                    { model: Cliente, as: 'cliente' },
                    { model: Funcionario, as: 'responsavel' },
                    { model: Venda, as: 'vendas' }
                ]
            });
        } catch (err) {
            throw new Error(`Erro ao buscar contrato: ${err.message}`);
        }
    }

    async create(data) {
        try {
            return await Contrato.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar contrato: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const contrato = await Contrato.findByPk(id);
            if (!contrato) return null;

            await contrato.update(data);
            return contrato;
        } catch (err) {
            throw new Error(`Erro ao atualizar contrato: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const contrato = await Contrato.findByPk(id);
            if (!contrato) return null;

            await contrato.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir contrato: ${err.message}`);
        }
    }
}

module.exports = new ContratoRepository();
