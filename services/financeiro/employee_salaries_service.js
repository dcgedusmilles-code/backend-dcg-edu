const salarioFuncionarioRepository = require('../../repositories/financeiro/employee_salaries_repository');

class SalarioFuncionarioService {
    async create(data) {
        // calcula valor líquido
        data.valor_liquido = (data.salario_base + (data.beneficios || 0)) - (data.descontos || 0);
        return await salarioFuncionarioRepository.create(data);
    }

    async findAll() {
        return await salarioFuncionarioRepository.findAll();
    }

    async findById(id) {
        return await salarioFuncionarioRepository.findById(id);
    }

    async update(id, data) {
        if (data.salario_base || data.beneficios || data.descontos) {
            data.valor_liquido = (data.salario_base + (data.beneficios || 0)) - (data.descontos || 0);
        }
        return await salarioFuncionarioRepository.update(id, data);
    }

    async delete(id) {
        return await salarioFuncionarioRepository.delete(id);
    }
}

module.exports = new SalarioFuncionarioService();
