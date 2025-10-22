const funcionarioRepository = require('../../repositories/human_resources/employees_repository');

class FuncionarioService {
    async createFuncionario(data) {
        return await funcionarioRepository.create(data);
    }

    async getFuncionarios() {
        return await funcionarioRepository.findAll();
    }

    async getFuncionarioById(id) {
        return await funcionarioRepository.findById(id);
    }

    async updateFuncionario(id, data) {
        return await funcionarioRepository.update(id, data);
    }

    async deleteFuncionario(id) {
        return await funcionarioRepository.delete(id);
    }
}

module.exports = new FuncionarioService();
