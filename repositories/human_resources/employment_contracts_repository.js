const { ContratoTrabalho, Funcionario } = require('../../models');

class ContratoTrabalhoRepository {
    async create(data) {
        try {
            return await ContratoTrabalho.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar contrato de trabalho: ${err.message}`);
        }
    }

    async findAll(filters = {}) {
        try {
            return await ContratoTrabalho.findAll({
                where: filters,
                include: [
                    { model: Funcionario, as: 'funcionario' }
                ],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar contratos de trabalho: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await ContratoTrabalho.findByPk(id, {
                include: [
                    { model: Funcionario, as: 'funcionario' }
                ]
            });
        } catch (err) {
            throw new Error(`Erro ao buscar contrato de trabalho: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const contrato = await ContratoTrabalho.findByPk(id);
            if (!contrato) return null;

            await contrato.update(data);
            return contrato;
        } catch (err) {
            throw new Error(`Erro ao atualizar contrato de trabalho: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const contrato = await ContratoTrabalho.findByPk(id);
            if (!contrato) return null;

            await contrato.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir contrato de trabalho: ${err.message}`);
        }
    }
}

module.exports = new ContratoTrabalhoRepository();
