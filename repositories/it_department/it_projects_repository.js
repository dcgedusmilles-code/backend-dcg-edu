const { ProjetoTI } = require('../../models');

class ProjetoTIRepository {
    async create(data) {
        return await ProjetoTI.create(data);
    }

    async findAll() {
        return await ProjetoTI.findAll();
    }

    async findById(id) {
        return await ProjetoTI.findByPk(id);
    }

    async update(id, data) {
        const projeto = await ProjetoTI.findByPk(id);
        if (!projeto) return null;
        return await projeto.update(data);
    }

    async delete(id) {
        const projeto = await ProjetoTI.findByPk(id);
        if (!projeto) return null;
        await projeto.destroy();
        return true;
    }
}

module.exports = new ProjetoTIRepository();
