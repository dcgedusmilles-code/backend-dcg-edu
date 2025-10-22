const { Comissao, Venda, Funcionario } = require('../../models');

class ComissaoRepository {
    async findAll(filters = {}) {
        try {
            return await Comissao.findAll({
                where: filters,
                include: [
                    { model: Venda, as: 'venda' },
                    { model: Funcionario, as: 'funcionario' }
                ],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar comissões: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await Comissao.findByPk(id, {
                include: [
                    { model: Venda, as: 'venda' },
                    { model: Funcionario, as: 'funcionario' }
                ]
            });
        } catch (err) {
            throw new Error(`Erro ao buscar comissão: ${err.message}`);
        }
    }

    async create(data) {
        try {
            return await Comissao.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar comissão: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const comissao = await Comissao.findByPk(id);
            if (!comissao) return null;

            await comissao.update(data);
            return comissao;
        } catch (err) {
            throw new Error(`Erro ao atualizar comissão: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const comissao = await Comissao.findByPk(id);
            if (!comissao) return null;

            await comissao.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir comissão: ${err.message}`);
        }
    }
}

module.exports = new ComissaoRepository();
