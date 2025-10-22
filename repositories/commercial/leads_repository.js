const { Lead, Oportunidade } = require('../../models');

class LeadRepository {
    async findAll(filters = {}) {
        try {
            return await Lead.findAll({
                where: filters,
                include: [
                    { model: Oportunidade, as: 'oportunidades' }
                ],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar leads: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await Lead.findByPk(id, {
                include: [
                    { model: Oportunidade, as: 'oportunidades' }
                ]
            });
        } catch (err) {
            throw new Error(`Erro ao buscar lead: ${err.message}`);
        }
    }

    async create(data) {
        try {
            return await Lead.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar lead: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const lead = await Lead.findByPk(id);
            if (!lead) return null;

            await lead.update(data);
            return lead;
        } catch (err) {
            throw new Error(`Erro ao atualizar lead: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const lead = await Lead.findByPk(id);
            if (!lead) return null;

            await lead.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir lead: ${err.message}`);
        }
    }
}

module.exports = new LeadRepository();
