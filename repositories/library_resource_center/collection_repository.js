const { Acervo } = require('../../models');

class AcervoRepository {
    async findAll() {
        return await Acervo.findAll({ include: ['exemplares'] });
    }

    async findById(id) {
        return await Acervo.findByPk(id, { include: ['exemplares'] });
    }

    async create(data) {
        return await Acervo.create(data);
    }

    async update(id, data) {
        const acervo = await Acervo.findByPk(id);
        if (!acervo) return null;
        return await acervo.update(data);
    }

    async delete(id) {
        const acervo = await Acervo.findByPk(id);
        if (!acervo) return null;
        await acervo.destroy();
        return acervo;
    }
}

module.exports = new AcervoRepository();
