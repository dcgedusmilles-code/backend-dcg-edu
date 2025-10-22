const funcionarioSecretariaRepository = require('../../repositories/secretaria_academica/secretariat_staff_repository');

class FuncionarioSecretariaService {
    async create(data) {
        if (!data.secretaria_id || !data.funcionario_id) {
            throw new Error('Os campos secretaria_id e funcionario_id são obrigatórios.');
        }
        return await funcionarioSecretariaRepository.create(data);
    }

    async findAll() {
        return await funcionarioSecretariaRepository.findAll();
    }

    async findById(id) {
        const registro = await funcionarioSecretariaRepository.findById(id);
        if (!registro) throw new Error('Registro não encontrado.');
        return registro;
    }

    async update(id, data) {
        const registro = await funcionarioSecretariaRepository.update(id, data);
        if (!registro) throw new Error('Registro não encontrado para atualização.');
        return registro;
    }

    async delete(id) {
        const registro = await funcionarioSecretariaRepository.delete(id);
        if (!registro) throw new Error('Registro não encontrado para exclusão.');
        return registro;
    }
}

module.exports = new FuncionarioSecretariaService();
