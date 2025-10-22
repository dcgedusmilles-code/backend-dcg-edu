const { BeneficioEstudantil } = require('../../models');

class BeneficioEstudantilRepository {
    async findAll() {
        return await BeneficioEstudantil.findAll({ include: ['estudante'] });
    }

    async findById(id) {
        return await BeneficioEstudantil.findByPk(id, { include: ['estudante'] });
    }

    async create(data) {
        return await BeneficioEstudantil.create(data);
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

module.exports = new BeneficioEstudantilRepository();
