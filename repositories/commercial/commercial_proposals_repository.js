const { PropostaComercial } = require('../../models');

class PropostaComercialRepository {
    async findAll(filters = {}) {
        try {
            return await PropostaComercial.findAll({
                where: filters,
                include: ['cliente', 'oportunidade'],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar propostas comerciais: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await PropostaComercial.findByPk(id, {
                include: ['cliente', 'oportunidade']
            });
        } catch (err) {
            throw new Error(`Erro ao buscar proposta comercial: ${err.message}`);
        }
    }

    async create(data) {
        try {
            return await PropostaComercial.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar proposta comercial: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const proposta = await PropostaComercial.findByPk(id);
            if (!proposta) return null;

            await proposta.update(data);
            return proposta;
        } catch (err) {
            throw new Error(`Erro ao atualizar proposta comercial: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const proposta = await PropostaComercial.findByPk(id);
            if (!proposta) return null;

            await proposta.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir proposta comercial: ${err.message}`);
        }
    }
}

module.exports = new PropostaComercialRepository();
