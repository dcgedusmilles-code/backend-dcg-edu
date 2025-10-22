const { InstituicaoParceira } = require('../../models');

class InstituicaoParceiraRepository {
    async findAll() {
        return await InstituicaoParceira.findAll({ include: ['programas'] });
    }

    async findById(id) {
        return await InstituicaoParceira.findByPk(id, { include: ['programas'] });
    }

    async create(data) {
        return await InstituicaoParceira.create(data);
    }

    async update(id, data) {
        const inst = await this.findById(id);
        if (!inst) return null;
        return await inst.update(data);
    }

    async delete(id) {
        const inst = await this.findById(id);
        if (!inst) return null;
        await inst.destroy();
        return true;
    }
}

module.exports = new InstituicaoParceiraRepository();
