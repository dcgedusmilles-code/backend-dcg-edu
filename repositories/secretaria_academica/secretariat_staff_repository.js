const { FuncionarioSecretaria } = require('../../models');

class FuncionarioSecretariaRepository {
    async create(data) {
        return await FuncionarioSecretaria.create(data);
    }

    async findAll() {
        return await FuncionarioSecretaria.findAll({
            include: ['secretaria', 'funcionario', 'agendamentos']
        });
    }

    async findById(id) {
        return await FuncionarioSecretaria.findByPk(id, {
            include: ['secretaria', 'funcionario', 'agendamentos']
        });
    }

    async update(id, data) {
        const registro = await FuncionarioSecretaria.findByPk(id);
        if (!registro) return null;
        await registro.update(data);
        return registro;
    }

    async delete(id) {
        const registro = await FuncionarioSecretaria.findByPk(id);
        if (!registro) return null;
        await registro.destroy();
        return registro;
    }
}

module.exports = new FuncionarioSecretariaRepository();
