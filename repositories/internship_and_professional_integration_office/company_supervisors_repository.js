const { SupervisorEmpresa, EmpresaParceira } = require('../../models');

class SupervisorEmpresaRepository {
    async findAll() {
        return await SupervisorEmpresa.findAll({
            include: [{ model: EmpresaParceira, as: 'empresa' }]
        });
    }

    async findById(id) {
        return await SupervisorEmpresa.findByPk(id, {
            include: [{ model: EmpresaParceira, as: 'empresa' }]
        });
    }

    async create(data) {
        return await SupervisorEmpresa.create(data);
    }

    async update(id, data) {
        const record = await SupervisorEmpresa.findByPk(id);
        if (!record) return null;
        return await record.update(data);
    }

    async delete(id) {
        const record = await SupervisorEmpresa.findByPk(id);
        if (!record) return null;
        await record.destroy();
        return true;
    }
}

module.exports = new SupervisorEmpresaRepository();
