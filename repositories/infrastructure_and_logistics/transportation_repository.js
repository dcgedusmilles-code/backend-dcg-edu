const { Transporte } = require('../../models');

class TransporteRepository {
    async findAll() {
        return await Transporte.findAll();
    }

    async findById(id) {
        return await Transporte.findByPk(id);
    }

    async create(data) {
        return await Transporte.create(data);
    }

    async update(id, data) {
        const transporte = await Transporte.findByPk(id);
        if (!transporte) return null;
        await transporte.update(data);
        return transporte;
    }

    async delete(id) {
        const transporte = await Transporte.findByPk(id);
        if (!transporte) return null;
        await transporte.destroy();
        return transporte;
    }
}

module.exports = new TransporteRepository();
