const { Ferias } = require('../../models');

class FeriasRepository {
    async findAll() {
        return Ferias.findAll({ include: ['funcionario'] });
    }

    async findById(id) {
        return Ferias.findByPk(id, { include: ['funcionario'] });
    }

    async create(data) {
        return Ferias.create(data);
    }

    async update(id, data) {
        const ferias = await this.findById(id);
        if (!ferias) return null;
        return ferias.update(data);
    }

    async delete(id) {
        const ferias = await this.findById(id);
        if (!ferias) return null;
        await ferias.destroy();
        return true;
    }
}

module.exports = new FeriasRepository();
