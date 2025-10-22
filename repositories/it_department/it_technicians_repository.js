const { TecnicoTI, ManutencaoTI, RedeInfraestrutura, SegurancaTI, ProjetoTI } = require('../../models');

class TecnicoTIRepository {
    async create(data) {
        return await TecnicoTI.create(data);
    }

    async findAll() {
        return await TecnicoTI.findAll({
            include: [
                { model: ManutencaoTI, as: 'manutencoes' },
                { model: RedeInfraestrutura, as: 'redes' },
                { model: SegurancaTI, as: 'segurancas' },
                { model: ProjetoTI, as: 'projetos' },
            ]
        });
    }

    async findById(id) {
        return await TecnicoTI.findByPk(id, {
            include: [
                { model: ManutencaoTI, as: 'manutencoes' },
                { model: RedeInfraestrutura, as: 'redes' },
                { model: SegurancaTI, as: 'segurancas' },
                { model: ProjetoTI, as: 'projetos' },
            ]
        });
    }

    async update(id, data) {
        const tecnico = await TecnicoTI.findByPk(id);
        if (!tecnico) return null;
        return await tecnico.update(data);
    }

    async delete(id) {
        const tecnico = await TecnicoTI.findByPk(id);
        if (!tecnico) return null;
        await tecnico.destroy();
        return tecnico;
    }
}

module.exports = new TecnicoTIRepository();
