const { SalarioFuncionario, FuncionarioSecretaria } = require('../../models');

class SalarioFuncionarioRepository {
    async create(data) {
        return await SalarioFuncionario.create(data);
    }

    async findAll() {
        return await SalarioFuncionario.findAll({
            include: [{ model: FuncionarioSecretaria, as: 'funcionario' }]
        });
    }

    async findById(id) {
        return await SalarioFuncionario.findByPk(id, {
            include: [{ model: FuncionarioSecretaria, as: 'funcionario' }]
        });
    }

    async update(id, data) {
        const salario = await this.findById(id);
        if (!salario) return null;
        return await salario.update(data);
    }

    async delete(id) {
        const salario = await this.findById(id);
        if (!salario) return null;
        await salario.destroy();
        return true;
    }
}

module.exports = new SalarioFuncionarioRepository();
