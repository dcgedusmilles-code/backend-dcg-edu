const { BolsaEstudantil } = require('../../models');

class BolsaEstudantilRepository {
    async findAll() {
        return await BolsaEstudantil.findAll();
    }

    async findById(id) {
        return await BolsaEstudantil.findByPk(id);
    }

    async create(data) {
        return await BolsaEstudantil.create(data);
    }

    async update(id, data) {
        const registro = await this.findById(id);
        if (!registro) return null;
        return await registro.update(data);
    }

    async delete(id) {
        const registro = await this.findById(id);
        if (!registro) return null;
        await registro.destroy();
        return registro;
    }
}

module.exports = new BolsaEstudantilRepository();
