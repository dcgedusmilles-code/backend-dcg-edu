const { Cargo } = require('../../models');

class CargoRepository {
    async create(data) {
        return await Cargo.create(data);
    }

    async findAll() {
        return await Cargo.findAll({ include: ['departamento', 'funcionarios'] });
    }

    async findById(id) {
        return await Cargo.findByPk(id, { include: ['departamento', 'funcionarios'] });
    }

    async update(id, data) {
        const cargo = await Cargo.findByPk(id);
        if (!cargo) return null;
        return await cargo.update(data);
    }

    async delete(id) {
        const cargo = await Cargo.findByPk(id);
        if (!cargo) return null;
        await cargo.destroy();
        return true;
    }
}

module.exports = new CargoRepository();
