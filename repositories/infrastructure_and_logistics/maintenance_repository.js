const { Manutencao, Patrimonio, Fornecedor } = require('../../models');

class ManutencaoRepository {
    async findAll() {
        return await Manutencao.findAll({
            include: [
                { model: Patrimonio, as: 'patrimonio' },
                { model: Fornecedor, as: 'fornecedor_info' }
            ]
        });
    }

    async findById(id) {
        return await Manutencao.findByPk(id, {
            include: [
                { model: Patrimonio, as: 'patrimonio' },
                { model: Fornecedor, as: 'fornecedor_info' }
            ]
        });
    }

    async create(data) {
        return await Manutencao.create(data);
    }

    async update(id, data) {
        const manutencao = await Manutencao.findByPk(id);
        if (!manutencao) return null;
        return await manutencao.update(data);
    }

    async delete(id) {
        const manutencao = await Manutencao.findByPk(id);
        if (!manutencao) return null;
        await manutencao.destroy();
        return manutencao;
    }
}

module.exports = new ManutencaoRepository();
