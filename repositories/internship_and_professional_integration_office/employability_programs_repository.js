const { ProgramaEmpregabilidade, EmpresaParceira } = require('../../models');

class ProgramaEmpregabilidadeRepository {
    async findAll() {
        return await ProgramaEmpregabilidade.findAll({
            include: [{ model: EmpresaParceira, as: 'empresa' }],
        });
    }

    async findById(id) {
        return await ProgramaEmpregabilidade.findByPk(id, {
            include: [{ model: EmpresaParceira, as: 'empresa' }],
        });
    }

    async create(data) {
        return await ProgramaEmpregabilidade.create(data);
    }

    async update(id, data) {
        const record = await ProgramaEmpregabilidade.findByPk(id);
        if (!record) return null;
        return await record.update(data);
    }

    async delete(id) {
        const record = await ProgramaEmpregabilidade.findByPk(id);
        if (!record) return null;
        await record.destroy();
        return true;
    }
}

module.exports = new ProgramaEmpregabilidadeRepository();

