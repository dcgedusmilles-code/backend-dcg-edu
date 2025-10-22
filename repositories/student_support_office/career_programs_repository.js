const { ProgramaCarreira, InstituicaoParceira } = require('../../models');

class ProgramaCarreiraRepository {
    async create(data) {
        return await ProgramaCarreira.create(data);
    }

    async findAll() {
        return await ProgramaCarreira.findAll({
            include: [{ model: InstituicaoParceira, as: 'instituicao' }]
        });
    }

    async findById(id) {
        return await ProgramaCarreira.findByPk(id, {
            include: [{ model: InstituicaoParceira, as: 'instituicao' }]
        });
    }

    async update(id, data) {
        const programa = await ProgramaCarreira.findByPk(id);
        if (!programa) return null;
        return await programa.update(data);
    }

    async delete(id) {
        const programa = await ProgramaCarreira.findByPk(id);
        if (!programa) return null;
        await programa.destroy();
        return programa;
    }
}

module.exports = new ProgramaCarreiraRepository();
